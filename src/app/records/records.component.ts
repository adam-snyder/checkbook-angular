import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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

  ngOnInit() {
    client.models.Record.observeQuery()
      .pipe(takeUntilDestroyed())
      .subscribe({
        next: ( { items } ) => {
          this.records = items;
        }
      })
  }
}
