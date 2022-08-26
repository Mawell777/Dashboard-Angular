import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Client } from '../interfaces/client';

@Component({
  selector: 'app-tabella-utenti',
  templateUrl: './tabella-utenti.component.html',
  styleUrls: ['./tabella-utenti.component.css'],
})
export class TabellaUtentiComponent implements OnInit {
  @Output() eventUpdateClient = new EventEmitter();
  @Output() eventOpenFormClient = new EventEmitter();
  @Output() eventDeleteClient = new EventEmitter();
  @Input() clients: Client[] = [];
  constructor() {}

  ngOnInit(): void {}

  tableCienti = true;

  public updateClient(item: Client): void {
    this.eventUpdateClient.emit(item);
  }

  public deleteClient(id: any): void {
    this.eventDeleteClient.emit(id);
  }

  public addFormClient() {
    this.tableCienti = false;
    this.eventOpenFormClient.emit();
  }
}
