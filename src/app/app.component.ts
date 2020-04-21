import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/model/app-state.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {
  rollHistory: Observable<Array<string>>;
  constructor(
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.rollHistory = this.store.select(store => store.rollHistory);
  }
}
