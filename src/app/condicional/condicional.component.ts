import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-condicional',
  templateUrl: './condicional.component.html',
  styleUrls: ['./condicional.component.scss'],
})
export class CondicionalComponent implements OnInit {
  userTheme: string = 'light';
  name: string = 'Rafael Ramos';
  email: string = 'rafael@email.com';

  isDataAvailable: boolean = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.isDataAvailable = true;
    }, 3000);
  }
}
