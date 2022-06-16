import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {requiredFileType} from '../requiredFileType';

@Component({
  selector: 'app-routine',
  templateUrl: './routine.component.html',
  styleUrls: ['./routine.component.css']
})
export class RoutineComponent implements OnInit {
  @Input() secondFormGroup: FormGroup;
  private submitted: boolean;
  RFormGroup: FormGroup;

  // tslint:disable-next-line:variable-name
  constructor(private _formBuilder: FormBuilder) {
    this.RFormGroup = new FormGroup({});
  }

  ngOnInit() {
    this.RFormGroup = this._formBuilder.group({
      textarea: ['', [Validators.required]],
      textarea1: ['', [Validators.required]],
    });
  }

  submit() {
    this.submitted = true;
    if (this.RFormGroup.invalid) {
      return;
    }
    console.log(this.RFormGroup.value);
  }
}
