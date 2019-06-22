import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public username: string;
  public password: string;
  newForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.newForm = this.fb.group({
      username: new FormControl(''),
      password: new FormControl('')
    })
  }

  login() {
    console.log('tyler')
  }

}
