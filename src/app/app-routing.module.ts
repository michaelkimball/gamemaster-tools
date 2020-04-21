import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GmTableAddComponent } from './gm-table-add/gm-table-add.component';
import { GmTableComponent } from './gm-table/gm-table.component';


const routes: Routes = [
  { path: 'table-add',  component: GmTableAddComponent},
  { path: 'table',  component: GmTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
