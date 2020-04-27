import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GmTableAddComponent } from './gm-table-add/gm-table-add.component';
import { GmTableComponent } from './gm-table/gm-table.component';
import { GmTableItemEditComponent } from './gm-table-item-edit/gm-table-item-edit.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { TableReducer } from './store/reducer/table.reducer';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { TableEffects } from './store/effect/table.effect';
import { RollHistoryReducer } from './store/reducer/roll-history.reducer';
import { HistoryPipe } from './history.pipe';
import { RollMessageComponent } from './roll-message/roll-message.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DeleteConfirmComponent } from './delete-confirm/delete-confirm.component';
import { GmTableImportComponent } from './gm-table-import/gm-table-import.component';

@NgModule({
  declarations: [
    AppComponent,
    GmTableAddComponent,
    GmTableComponent,
    GmTableItemEditComponent,
    RollMessageComponent,
    HistoryPipe,
    DeleteConfirmComponent,
    GmTableImportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    DragDropModule,
    StoreModule.forRoot({
      tables: TableReducer,
      rollHistory: RollHistoryReducer
    }),
    EffectsModule.forRoot([TableEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    HttpClientModule,
    FontAwesomeModule
  ],
  entryComponents: [
    GmTableItemEditComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
