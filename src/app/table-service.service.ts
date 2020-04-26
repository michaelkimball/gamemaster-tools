import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Table, TableSearchResult } from './store/model/table.model';

@Injectable({
  providedIn: 'root'
})
export class TableServiceService {
  // private TABLE_URL = 'http://localhost:3000/tables';
  private TABLE_URL = 'http://localhost:8080/tables';
  constructor(private http: HttpClient) { }

  getTables(pageNumber?: number, name?: string) {
    let options = {
      params: {}
    }
    if(pageNumber !== undefined){
      options.params['page'] = pageNumber
    }
    if(name !== undefined){
      options.params['name'] = name;
    }
    return this.http.get<TableSearchResult>(this.TABLE_URL, options);
  }

  addTable(table: Table){
    return this.http.post(this.TABLE_URL, table);
  }

  updateTable(table: Table){
    return this.http.put(`${this.TABLE_URL}/${table.id}`, table);
  }

  deleteTable(id: string){
    return this.http.delete(`${this.TABLE_URL}/${id}`);
  }
}
