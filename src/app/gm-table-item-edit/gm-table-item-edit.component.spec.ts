import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmTableItemEditComponent } from './gm-table-item-edit.component';

describe('GmTableItemEditComponent', () => {
  let component: GmTableItemEditComponent;
  let fixture: ComponentFixture<GmTableItemEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmTableItemEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmTableItemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
