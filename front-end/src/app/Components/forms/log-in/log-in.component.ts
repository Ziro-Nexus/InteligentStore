import { Component } from '@angular/core';

@Component({
  selector: 'log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {
  showFormLog = false;
  showFormsLog(){
    this.showFormLog = true;
  }
}
