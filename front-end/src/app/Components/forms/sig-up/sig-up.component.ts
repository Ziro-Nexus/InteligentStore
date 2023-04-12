import { Component } from '@angular/core';

@Component({
  selector: 'sig-up',
  templateUrl: './sig-up.component.html',
  styleUrls: ['./sig-up.component.scss']
})
export class SigUpComponent {
  showFormSig = false;
  mostrarForm(){
    this.showFormSig = true;
  }
}
