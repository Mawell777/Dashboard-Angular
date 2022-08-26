import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Client } from '../interfaces/client';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { ClientService } from '../client.service';
@Component({
  selector: 'app-update-clienti',
  templateUrl: './update-clienti.component.html',
  styleUrls: ['./update-clienti.component.css'],
})
export class UpdateClientiComponent implements OnInit {
  @Output() eventUpdateClientForm = new EventEmitter();
  @Input() clientUpdate!: Client;
  id!: Client;
  data: any;

  constructor(
    private route: ActivatedRoute,
    private ClientService: ClientService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getDada();
  }

  getDada() {
    this.ClientService.getPersonById(this.id).subscribe((res) => {
      this.data = res;
      this.clientUpdate = this.data;
    });
  }
  public updateClient() {
    this.ClientService.updateperson(this.id, this.clientUpdate).subscribe(
      (res) => {
        this.getDada();
        window.location.reload();
      }
    );
    this.router.navigate(['/dashboard']);
  }
}
