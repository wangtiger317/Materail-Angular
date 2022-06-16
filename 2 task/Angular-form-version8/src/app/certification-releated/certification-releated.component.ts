import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-certification-releated',
  templateUrl: './certification-releated.component.html',
  styleUrls: ['./certification-releated.component.css']
})
export class CertificationReleatedComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {
  }
  registerForm: FormGroup;
  submitted = true;
  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      Nurse : ['', Validators.required],
      Healthcare : ['', Validators.required],
    });
  }
  public errorHandling = (control: string, error: string) => {
    return this.registerForm.controls[control].hasError(error);
  }
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    alert('SUCCESS!!');
  }

}
