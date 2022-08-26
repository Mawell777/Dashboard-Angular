import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TabellaUtentiComponent } from './tabella-utenti/tabella-utenti.component';
import { FormClientiComponent } from './form-clienti/form-clienti.component';
import { UpdateClientiComponent } from './update-clienti/update-clienti.component';
import { ClientService } from './client.service';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    TabellaUtentiComponent,
    FormClientiComponent,
    UpdateClientiComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [ClientService],
  bootstrap: [AppComponent],
})
export class AppModule {}
