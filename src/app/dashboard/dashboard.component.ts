import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Client } from '../interfaces/client';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  clients!: Client[];
  client!: Client;
  id!: any;
  data!: Client;
  count: any;
  showTabellaclienti = true;

  constructor(
    private http: HttpClient,
    private ClientService: ClientService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getClient();
    this.getClientCount();
  }

  getClientCount() {
    this.ClientService.getClientCount().subscribe((num) => {
      this.count = num;
    });
  }

  getClient() {
    this.ClientService.getClient().subscribe((data) => {
      this.clients = data;
    });
  }
  showFormUpdateClienti = false;
  showFormClienti = false;

  public OneventUpdateClientForm() {
    this.showFormUpdateClienti = !this.showFormUpdateClienti;
  }

  public OneventOpenFormClient() {
    this.showFormClienti = !this.showFormClienti;
  }

  public OneventcreateClientForm(event: Client) {
    this.showTabellaclienti = true;
    this.ClientService.addPerson(event).subscribe((res) => {
      this.getClient();
      window.location.reload();
    });
    this.showFormClienti = false;
    this.router.navigate(['/dashboard']);
  }

  public OneventDeleteClient(event: Client) {
    this.id = event;
    this.ClientService.deleteDataPerson(this.id).subscribe((res) => {
      this.getClient();
      window.location.reload();
    });
  }
}
