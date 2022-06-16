import {Component, Input, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) { }
  registerForm: FormGroup;
  submitted = false;
  title = 'Care Seeker and Loved One(s) Registration';

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', [Validators.required,  Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.registerForm.value);
    // stop the process here if form is invalid
    if (this.registerForm.invalid) {
      // tslint:disable-next-line:no-bitwise
      console.log(this.registerForm.value);
    }

    alert('SUCCESS!!');
  }
}
