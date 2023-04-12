import { Component, TemplateRef } from '@angular/core';

@Component({
  selector: 'headeris',
  templateUrl: './headeris.component.html',
  styleUrls: ['./headeris.component.scss'],
})

export class HeaderisComponent {
  public title_head : string;
  public linkOne: string;
  public linkTwo: string;

  constructor(){
    this.title_head = "InteligentSore";
    this.linkOne = "Log In";
    this.linkTwo = "Sig Up";
  }
}
