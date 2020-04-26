import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/model/app-state.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit, AfterViewInit {
  rollHistory: Observable<Array<string>>;
  @ViewChild('rollHistoryDisplay') rollHistoryDisplay: ElementRef;
  constructor(
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.rollHistory = this.store.select(store => store.rollHistory);
  }

  ngAfterViewInit(): void {
    const config = { attributes: true };
    const historyObserver = new MutationObserver(() => 
      this.rollHistoryDisplay.nativeElement.scrollTop = this.rollHistoryDisplay.nativeElement.scrollHeight);
    historyObserver.observe(this.rollHistoryDisplay.nativeElement, config);
  }
}
