import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  template: `
  <h1>{{ (kegs | async)?.name }}</h1>
  `,
})
export class AppComponent {
  kegs: FirebaseObjectObservable<any>;
  constructor(db: AngularFireDatabase) {
    this.kegs = db.object('/kegs');
  }
}