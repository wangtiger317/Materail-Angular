import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-home-with',
  templateUrl: './home-with.component.html',
  styleUrls: ['./home-with.component.css']
})
export class HomeWithComponent  {
  HomeGroup: FormGroup;
  Dataq: Array<any> = [
    {name: 'No issue entering a home with pets', value: 'No issue entering a home with pets'},
    {name: 'Dogs', value: 'Dogs'},
    {name: 'cats', value: 'cats'},
  ];
  constructor(private fb: FormBuilder) {
    this.HomeGroup = this.fb.group({
      checkArray: this.fb.array([], [Validators.required]),
      home: ['', Validators.required],
    });
  }
  onCheckboxChange(e) {
    const checkArray: FormArray = this.HomeGroup.get('checkArray') as FormArray;
    console.log(checkArray.value);
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
  checkCheckBoxvalue(event) {
    console.log(event.checked);
  }
  public errorHandling = (control: string, error: string) => {
    return this.HomeGroup.controls[control].hasError(error);
  }
  submitForm() {
    console.log(this.HomeGroup.value);
  }
}
