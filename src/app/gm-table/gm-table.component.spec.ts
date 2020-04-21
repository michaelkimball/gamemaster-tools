import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmTableComponent } from './gm-table.component';

describe('GmTableComponent', () => {
  let component: GmTableComponent;
  let fixture: ComponentFixture<GmTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
