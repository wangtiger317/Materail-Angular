import {Component, Input, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { ValueTransformer } from '@angular/compiler/src/util';
import {showRuleCrashWarning} from 'tslint/lib/error';
// @ts-ignore
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      checkArray: this.fb.array([], [Validators.required])
    });
  }
  @Input()
  required: boolean;
  checked: boolean;
  value: boolean;
  submitted = false;
  form: FormGroup;
// tslint:disable-next-line:no-unused-expression
  optionValue = '';
  Data: Array<any> = [
    {name: 'Companionship', value: 'Companionship'},
    {name: 'Light cleaning', value: 'Light cleaning'},
    {name: 'Medication administation', value: 'Medication administation'},
    {name: 'Food preparation', value: 'Food preparation'},
    {name: 'Groceries / errands', value: 'Groceries / errands'},
    {name: 'Driving (short drives)', value: 'Driving (short drives)'},
    {name: 'Hygiene', value: 'Hygiene'},
    {name: 'Foot care', value: 'Foot care'},
    {name: 'Hairdressing / haircut', value: 'Hairdressing / haircut'},
    {name: 'Massotherapy', value: 'Massotherapy'},
    {name: 'Physio Therapy', value: 'Physio Therapy'},
    {name: 'Fitness / Training', value: 'Fitness / Training'},
    {name: 'Handyman / Home repairs', value: 'Handyman / Home repairs'},
    {name: 'Household organization', value: 'Household organization'},
    {name: 'Garden work / snow shoveling', value: 'Garden work / snow shoveling'}
  ];

  onCheckboxChange(e) {
    const checkArray: FormArray = this.form.get('checkArray') as FormArray;

    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i = 0;
      checkArray.controls.forEach((item: FormControl) => {
        // tslint:disable-next-line:triple-equals
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }


  public errorHandling = (control: string, error: string) => {
    return this.form.controls[control].hasError(error);
  }
  submitForm() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.value);
  }
}

