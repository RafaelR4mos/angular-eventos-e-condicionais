import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CondicionalComponent } from './condicional/condicional.component';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventosComponent } from './eventos/eventos.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, CondicionalComponent, EventosComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
