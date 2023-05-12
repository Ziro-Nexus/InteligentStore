import { Component, OnInit } from '@angular/core';
import * as forms from '@angular/forms';
import { SigUp, business } from 'src/app/Models/sig.modesl';
import { SigService } from 'src/app/Service/sig.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sig',
  templateUrl: './sig.component.html',
  styleUrls: ['./sig.component.scss']
})
export class SigComponent implements OnInit {
  sigGroup: forms.FormGroup;
  user: SigUp;
  businessis: string[];
  constructor(private router: Router ,private sigServi: SigService){
    this.sigGroup = new forms.FormGroup({
        name: new FormControl('', []),
        email: new FormControl('', []),
        dateOfBirth: new FormControl('', []),
        password: new FormControl('', []),
        confirmPassword: new FormControl('', []),
        typeOfBusiness: new FormControl('', [])
    })
    this.user = new SigUp();
    this.businessis= Object.values(business);
  }
  ngOnInit(): void {
  }
  onNewUser(): void{
    this.user = this.sigGroup.value;
    this.sigServi.addUser(this.user).subscribe({
      next: ()=>{
        location.reload();
      }
    });

  }
}
