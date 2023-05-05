import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IUsuariosCadastros } from 'src/interface';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss'],
})
export class EventosComponent {
  @ViewChild('myForm') myForm: NgForm | undefined;
  nome: string = '';
  email: string = '';
  date: string = '';
  isLightTheme: boolean = true;

  usuariosCadastrados: IUsuariosCadastros[] = [
    {
      nome: 'Rafael',
      data: '05-05-2022',
      email: 'rafael@email.com',
    },
  ];

  enviarFormulario(): void {
    console.log('Nome:', this.myForm?.value.nome);
    console.log('Data nascimento:', this.myForm?.value.date);
    console.log('email:', this.myForm?.value.email);

    this.usuariosCadastrados.push({
      nome: this.myForm?.value.nome,
      data: this.myForm?.value.date,
      email: this.myForm?.value.email,
    });
  }

  toggleTheme(): void {
    this.isLightTheme = !this.isLightTheme;
  }
}
