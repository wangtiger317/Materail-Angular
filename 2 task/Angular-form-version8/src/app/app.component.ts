// import { Component, ViewChild, OnInit } from '@angular/core';
// import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
//
// export class AppComponent implements OnInit {
//   constructor(public fb: FormBuilder) {}
//   ngOnInit(): void {
//   }
// }
import {Component, ViewChild , OnInit} from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
export interface Subject {
  name: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {
  }
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  registerForm: FormGroup;
  submitted = false;
  title = 'Angular-form';
  @ViewChild('chipList', { static: true }) chipList;
  GradeArray: any = ['8th Grade', '9th Grade', '10th Grade', '11th Grade', '12th Grade'];
  SubjectsArray: Subject[] = [];
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      address1: ['', Validators.required],
      City: ['', Validators.required],
      State: ['', Validators.required],
      Postal_zip: ['', Validators.required],
      Country: ['', Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    alert('SUCCESS!!');
  }
}
