import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';

import { Client } from '../interfaces/client';
@Component({
  selector: 'app-form-clienti',
  templateUrl: './form-clienti.component.html',
  styleUrls: ['./form-clienti.component.css'],
})
export class FormClientiComponent implements OnInit {
  @Output() eventcreateClientForm = new EventEmitter<Client>();

  angForm!: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      nome: ['', Validators.required],
      cognome: ['', Validators.required],
      country: ['', Validators.required],
      cap: ['', Validators.required],
      citta: ['', Validators.required],
      telefono: ['', Validators.required],
    });
  }
  ngOnInit(): void {}

  controlError(control: FormControl) {
    if (control.value != null && control.value.indexOf('') != -1) {
      return { controlError: true };
    }
    return null;
  }

  public createClient() {
    this.eventcreateClientForm.emit(this.angForm.value);
  }
}
