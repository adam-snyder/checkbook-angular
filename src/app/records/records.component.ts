import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { generateClient } from 'aws-amplify/api';
import type { Schema } from '../../../amplify/data/resource';
import { AmountPipe } from './amount.pipe';

const client = generateClient<Schema>();

interface LineItem {
  id: string;
  name: string;
  date: Date;
  credit: number;
  debit: number;
  balance: number;
  isEstimate: boolean;
  isFuture: boolean;
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
  items: LineItem[] = [];

  ngOnInit() {
    this.display();
  }

  private display() {
    const payments$ = client.models.Payment.list();
    const records$ = client.models.Record.list();
    Promise.all([payments$, records$])
      .then(([{ data: payments }, { data: records}]) => {
        this.items = this.process(payments, records);
      });
  }

  process(payments: any[], records: any[]): LineItem[] {

    const sortItems = (a: any, b: any): number => {
      return a.date - b.date;
    };

    const items = [
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
      paymentId: id,
      name,
      type,
      nextDate: date,
      amount,
      isEstimate,
    } = payment;

    return {
      id,
      name,
      date: new Date(date),
      credit: type === 'credit' ? amount : 0,
      debit: type === 'debit' ? amount : 0,
      balance: 0,
      isFuture: true,
      isEstimate,
    };
  }

  private formatRecord(record: any): LineItem {
    const {
      recordId: id,
      name,
      type,
      postDate: date,
      amount,
    } = record;

    return {
      id,
      name,
      date: new Date(date),
      credit: type === 'credit' ? amount : 0,
      debit: type === 'debit' ? amount : 0,
      balance: 0,
      isFuture: false,
      isEstimate: false,
    };
  }
}
