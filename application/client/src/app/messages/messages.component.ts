import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';

import { MessagesState, ClearMessages } from '../messages.state';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  @Select(MessagesState) messages$: Observable<string[]>;

  constructor(private store: Store) { }

  ngOnInit() { }

  clearMessages(): void {
    this.store.dispatch(new ClearMessages());
  }
}
