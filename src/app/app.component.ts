import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AmplifyAuthenticatorModule, AuthenticatorService } from '@aws-amplify/ui-angular';
import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';
import type { Payment, Record, Schema } from '../../amplify/data/resource';
import outputs from '../../amplify_outputs.json';
import { RecordsComponent } from './records/records.component';

type Attributes = { [key: string]: any };

const client = generateClient<Schema>();

const REC_CSV = `
name,type,category,amount,isEstimate,isRepeat,isPending,isArchived,postDate
Initial Balance,credit,,3779.16,,false,false,,2024-10-17
`;

const PAYMENTS_CSV = `
name,type,category,amount,isEstimate,isRepeat,repeatType,futureCopies,lastProcessDate,nextDate
State Farm Life,debit,insurance,750,false,true,year,1,,2024-05-13
EF Tours,debit,school,296,false,true,month,1,,2024-11-01
MVC Paycheck,credit,income,750,true,true,biweek,2,,2024-10-25
Mortgage,debit,house,2000,false,true,month,1,,2024-11-01
Oakwood,debit,utilities,102.65,true,true,month,1,,2024-10-21
Mattress Firm,debit,credit,84,false,true,month,1,,2024-10-25
AT&T,debit,utilities,55.38,false,true,month,1,,2024-10-28
AES,debit,utilities,47,true,true,month,1,,2024-11-06
Centerpoint,debit,utilities,170,true,true,month,1,,2024-11-07
Chase Credit Card,debit,credit,0,true,true,month,1,,2024-11-01
Other Paycheck,credit,income,650,true,true,month,1,,2024-10-30
College 529,debit,investment,150,false,true,month,1,,2024-11-03
Thrivent,debit,insurance,30,false,true,month,1,,2024-11-03
Highlander,debit,auto,469,false,true,month,1,,2024-11-15
Lowe's Credit,debit,credit,176,false,true,month,1,,2024-10-24
`;

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, RecordsComponent, AmplifyAuthenticatorModule],
})
export class AppComponent {
  title = 'amplify-angular-template';

  constructor(public authenticator: AuthenticatorService) {
    Amplify.configure(outputs);
  }

  onReset(): void {

    const deleteRec$ = client.models.Record.list()
      .then(({ data, errors }) => {
        console.log('deleting records:', data)
        return Promise.all([
          ...data.map(d => {
            return client.models.Record.delete({ id: d.id });
          })
        ]);
      })

    const deletePmt$ = client.models.Payment.list()
      .then(({ data, errors }) => {
        console.log('deleting payments:', data)
        return Promise.all([
          ...data.map(d => {
            return client.models.Payment.delete({ id: d.id });
          })
        ]);
      });

    const pmtItems = this.parseData(PAYMENTS_CSV);
    const recItems = this.parseData(REC_CSV);

    // Delete before create
    Promise.all([ deleteRec$, deletePmt$ ])
      .then(result => {
        return Promise.all([
          // Create payments
          ...pmtItems
            .map(item => {
              client.models.Payment.create(item as Payment)
                .then(({ data, errors }) => {
                  if (errors) {
                    console.error(errors);
                  } else {
                    console.log('creating payments:', data)
                  }
                  return data;
                });
            }),

          // Create records
          ...recItems
            .map(item => {
              client.models.Record.create(item as Record)
                .then(({ data, errors }) => {
                  if (errors) {
                    console.error(errors);
                  } else {
                    console.log('creating records:', data)
                  }
                  return data;
                });
            })
        ])
      });
  }


  private parseData(value: string): Attributes[] {
    const lines = value.split('\n')
      .filter(l => l.trim().length);

    const cols = lines[0].split(',');
    lines.shift();  // remove header row

    const items: Attributes[] = [];
    lines.forEach(line => {
      const fields = line.split(',');
      const item: Attributes = {};
      cols.forEach((c, i) => {
        let value: any = fields[i];

        if (c === 'amount') {
          value = parseFloat(value);
        } else if (c === 'repeatDay') {
          value = parseInt(value);
        } else if (c.startsWith('is')) {
          value = value === 'true';
        } else if (c === 'lastProcessDate' && !value?.length) {
          value = '1970-01-01T00:00:00.000Z';
        }

        item[c] = value;
      });
      items.push(item);
    });

    return items;
  }
}
