import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmTableImportComponent } from './gm-table-import.component';

describe('GmTableImportComponent', () => {
  let component: GmTableImportComponent;
  let fixture: ComponentFixture<GmTableImportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmTableImportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmTableImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
