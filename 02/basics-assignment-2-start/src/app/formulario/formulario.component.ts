import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  userName: string = "";
  isButtonEnabled: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onUpdateUserName(event: Event) {
    this.userName = (<HTMLInputElement>event.target).value;
    this.userName != '' ? this.isButtonEnabled = true : this.isButtonEnabled = false;    
  }

  onClickButton() {
    this.userName = "";
    this.isButtonEnabled = false;
  }

}
