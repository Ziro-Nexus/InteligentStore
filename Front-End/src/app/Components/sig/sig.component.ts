import { Component, OnInit } from '@angular/core';
import * as forms from '@angular/forms';
import { SigUp, business } from 'src/app/Models/sig.modesl';
import { SigService } from 'src/app/Service/sig.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sig',
  templateUrl: './sig.component.html',
  styleUrls: ['./sig.component.scss'],
})
export class SigComponent implements OnInit {
  sigGroup: forms.FormGroup;
  user: SigUp;
  businessis: string[];
  constructor(private router: Router, private sigServi: SigService) {
    this.sigGroup = new forms.FormGroup({
      name: new FormControl('', [
        forms.Validators.required,
        forms.Validators.pattern(
          /^([a-zA-Z]+[\'\,\.\-]?[a-zA-Z ]*)+[ ]([a-zA-Z]+[\'\,\.\-]?[a-zA-Z ]+)+$/
        ),
      ]),
      email: new FormControl('', [
        forms.Validators.required,
        forms.Validators.pattern(
          /^((([!#$%&'*+\-/=?^_`{|}~\w])|([!#$%&'*+\-/=?^_`{|}~\w][!#$%&'*+\-/=?^_`{|}~\.\w]{0,}[!#$%&'*+\-/=?^_`{|}~\w]))[@]\w+([-.]\w+)*\.\w+([-.]\w+)*)$/
        ),
      ]),
      dateOfBirth: new FormControl('', [
        forms.Validators.required,
        forms.Validators.pattern(
          /^((0?[13578]|10|12)(-|\/)(([1-9])|(0[1-9])|([12])([0-9]?)|(3[01]?))(-|\/)((19)([2-9])(\d{1})|(20)([01])(\d{1})|([8901])(\d{1}))|(0?[2469]|11)(-|\/)(([1-9])|(0[1-9])|([12])([0-9]?)|(3[0]?))(-|\/)((19)([2-9])(\d{1})|(20)([01])(\d{1})|([8901])(\d{1})))$/
        ),
      ]),
      password: new FormControl('', [
        forms.Validators.required,
        forms.Validators.pattern(/^.{4,8}$/),
      ]),
      confirmPassword: new FormControl('', [
        forms.Validators.required,
        forms.Validators.pattern(/^.{4,8}$/),
      ]),
      typeOfBusiness: new FormControl('', [forms.Validators.required]),
    });
    this.user = new SigUp();
    this.businessis = Object.values(business);
  }
  ngOnInit(): void {}


  password: string;
  confirm: string;
  onNewUser(): void {

    this.user = this.sigGroup.value;
    this.sigServi.addUser(this.user).subscribe(
      (user:any) => {
        this.password = this.sigGroup.value['password'];
        this.confirm = this.sigGroup.value['confirmPassword'];

        if(this.password !== this.confirm){
          alert('Las contraceñas no coinciden')
          this.sigServi.delete(user.id);
        }
        else{
          location.reload();
        }
      },
    );
  }
}
