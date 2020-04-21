import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmTableAddComponent } from './gm-table-add.component';

describe('GmTableAddComponent', () => {
  let component: GmTableAddComponent;
  let fixture: ComponentFixture<GmTableAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmTableAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmTableAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
