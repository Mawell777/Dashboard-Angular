import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Client } from './interfaces/client';
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ClientService {
  apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  getClientCount(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/count`);
  }

  getClient(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.apiUrl}/persons`);
  }

  addPerson(data: Client) {
    return this.http.post(`${this.apiUrl}/addperson`, data);
  }

  deleteDataPerson(id: Client) {
    return this.http.delete(`${this.apiUrl}/deleteperson/` + id);
  }

  updateperson(id: Client, data: Client) {
    return this.http.put(`${this.apiUrl}/updateperson/` + id, data);
  }

  getPersonById(id: Client) {
    return this.http.get(`${this.apiUrl}/person/` + id);
  }
}
