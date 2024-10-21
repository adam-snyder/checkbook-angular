import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { generateClient } from 'aws-amplify/api';
import moment from 'moment';
import { combineLatest } from 'rxjs';
import type { Schema } from '../../../amplify/data/resource';
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

  process(payments: any[], records: any[]): LineItem[] {

    const sortItems = (a: any, b: any): number => {
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

  private formatPayment(payment: any): LineItem {
    const {
      id,
      name,
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
      date: this.parseDate(date),
      isRepeat,
      credit: type === 'credit' ? amount : 0,
      debit: type === 'debit' ? amount : 0,
      balance: 0,
      isFuture: true,
      futureCopies,
      isEstimate,
    };
  }

  private formatRecord(record: any): LineItem {
    const {
      id,
      name,
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
      date: this.parseDate(date),
      isRepeat,
      credit: type === 'credit' ? amount : 0,
      debit: type === 'debit' ? amount : 0,
      balance: 0,
      isFuture: false,
      isEstimate,
      isPending,
    };
  }

  private parseDate(value: string): moment.Moment {
    return moment.utc(value);
  }
}
