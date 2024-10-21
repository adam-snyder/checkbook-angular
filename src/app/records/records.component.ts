import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { generateClient } from 'aws-amplify/api';
import moment from 'moment';
import { combineLatest } from 'rxjs';
import type { Payment, Record, Schema } from '../../../amplify/data/resource';
import { AmountPipe } from './amount.pipe';

const client = generateClient<Schema>();

interface LineItem {
  id: string;
  name: string;
  date: moment.Moment;
  isRepeat: boolean;
  credit: number;
  debit: number;
  balance: number;
  isEstimate: boolean;
  isFuture: boolean;
  category?: string | null;
  futureCopies?: number;
  isPending?: boolean;
}

@Component({
  selector: 'app-records',
  standalone: true,
  imports: [
    CommonModule,
    AmplifyAuthenticatorModule,
    FormsModule,
    AmountPipe
  ],
  templateUrl: './records.component.html',
  styleUrl: './records.component.scss'
})
export class RecordsComponent implements OnInit {

  destroyRef: DestroyRef;

  items: LineItem[] = [];

  constructor() {
    this.destroyRef = inject(DestroyRef);
  }

  ngOnInit() {
    const payments$ = client.models.Payment.observeQuery();
    const records$ = client.models.Record.observeQuery();

    // Listen for changes and update line items
    combineLatest([payments$, records$])
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: ([ { items: payments }, { items: records }]) => {
          this.items = this.process(payments, records);
        }
      });
  }

  process(payments: Payment[], records: Record[]): LineItem[] {

    const sortItems = (a: LineItem, b: LineItem): number => {
      return a.date.diff(b.date);
    };

    const items = [
      // TODO expand payments to N futureCopies
      ...payments.map(p => this.formatPayment(p)),
      ...records.map(r => this.formatRecord(r)),
    ];

    items.sort(sortItems);

    items.forEach((item, index, all) => {
      if (index > 0) {
        item.balance = all[index-1].balance;
      }
      item.balance += item.credit;
      item.balance -= item.debit;
    });

    return items;
  }

  private formatPayment(payment: Payment): LineItem {
    const {
      id,
      name,
      category,
      type,
      nextDate: date,
      isRepeat,
      amount,
      futureCopies,
      isEstimate,
    } = payment;

    return {
      id,
      name,
      category,
      date: this.parseDate(date),
      isRepeat: isRepeat || false,
      credit: type === 'credit' ? amount : 0,
      debit: type === 'debit' ? amount : 0,
      balance: 0,
      isFuture: true,
      futureCopies: futureCopies || 1,
      isEstimate: isEstimate || false,
    };
  }

  private formatRecord(record: Record): LineItem {
    const {
      id,
      name,
      category,
      type,
      postDate: date,
      isRepeat,
      amount,
      isEstimate,
      isPending,
    } = record;

    return {
      id,
      name,
      category,
      date: this.parseDate(date),
      isRepeat: isRepeat || false,
      credit: type === 'credit' ? amount : 0,
      debit: type === 'debit' ? amount : 0,
      balance: 0,
      isFuture: false,
      isEstimate: isEstimate || false,
      isPending: isPending || false,
    };
  }

  private parseDate(value: string): moment.Moment {
    return moment.utc(value);
  }
}
