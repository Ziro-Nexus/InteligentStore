import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { SigUp } from 'src/app/Models/sig.modesl';

import { LogService } from 'src/app/Service/log.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss'],
})
export class LogComponent implements OnInit {
  logGroup: FormGroup;
  users: any[];
  user: any;
  sw: number;
  check: boolean;
  constructor(private logServi: LogService) {
    this.logGroup = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^((([!#$%&'*+\-/=?^_`{|}~\w])|([!#$%&'*+\-/=?^_`{|}~\w][!#$%&'*+\-/=?^_`{|}~\.\w]{0,}[!#$%&'*+\-/=?^_`{|}~\w]))[@]\w+([-.]\w+)*\.\w+([-.]\w+)*)$/
        ),
      ]),
      password: new FormControl('', [Validators.required]),
    });
  }
  ngOnInit(): void {}
  async onLogUser() {

    const useris = await this.logServi.getUsers().toPromise();
    this.users = useris; // Necesitaremos proteger esta linea de codigo
   
    const email = this.logGroup.value['email'];
    const password = this.logGroup.value['password'];

    for (this.user of this.users) {
      switch (this.user.email) {
        case email:
          if (this.user.password == password) {
            console.log('existe');
          } else {
            console.log('No existe');
          }
          break;
        default:
          continue;
      }
    }

    this.user = [];
  }
}
