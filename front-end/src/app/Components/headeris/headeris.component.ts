import { Component } from '@angular/core';

@Component({
  selector: 'headeris',
  templateUrl: './headeris.component.html',
  styleUrls: ['./headeris.component.scss']
})
export class HeaderisComponent {
  public title : string;
  public linkOne : string;
  public linkTwo : string;

  constructor(){
    this.title = "InteligentStore";
    this.linkOne = "Log In";
    this.linkTwo = "Sig up";
    console.log("works corretly!!");
  }
}
