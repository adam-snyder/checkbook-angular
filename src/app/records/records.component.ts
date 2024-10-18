import { CommonModule } from '@angular/common';
import { Component, DestroyRef, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { generateClient } from 'aws-amplify/api';
import type { Schema } from '../../../amplify/data/resource';

const client = generateClient<Schema>();

@Component({
  selector: 'app-records',
  standalone: true,
  imports: [ CommonModule, AmplifyAuthenticatorModule, FormsModule ],
  templateUrl: './records.component.html',
  styleUrl: './records.component.css'
})
export class RecordsComponent implements OnInit {
  records: any[] = [];

  constructor(
    private destroyRef: DestroyRef
  ) {
  }

  ngOnInit() {
    this.listRecords();
  }

  private listRecords() {
    try {
      client.models.Record.observeQuery()
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe({
          next: ( { items } ) => {
            this.records = items;
          }
        })
    } catch (e) {
      console.error('failed to fetch records', e);
    }
  }
}
