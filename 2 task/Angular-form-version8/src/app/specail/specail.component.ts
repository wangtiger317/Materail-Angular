import {Component, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import {HomeWithComponent} from '../home-with/home-with.component';
@Component({
  selector: 'app-specail',
  templateUrl: './specail.component.html',
  styleUrls: ['./specail.component.css']
})
export class SpecailComponent   implements OnInit {
  // @ts-ignore
  @ViewChild(HomeWithComponent) Home;
  specailform: FormGroup;
  Data: Array<any> = [
    {name: 'Music', value: 'Music'},
    {name: 'Walks', value: 'Walks'},
    {name: 'Pets', value: 'Pets'},
    {name: 'Card games', value: 'Card games'},
    {name: 'Chess', value: 'Chess'},
    {name: 'Books/Reading', value: 'Books/Reading'},
  ];
  constructor(private fb: FormBuilder) {
    this.specailform = this.fb.group({
      checkArray: this.fb.array([], [Validators.required]),
      speic: ['', Validators.required],
    });
  }
  onCheckboxChange(e) {
    const checkArray: FormArray = this.specailform.get('checkArray') as FormArray;
    // console.log(checkArray);
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
    return this.specailform.controls[control].hasError(error);
  }
  submitForm() {
    console.log(this.specailform.value);
  }

  ngOnInit(): void {
    this.specailform = this.fb.group({
      speic: ['', Validators.required],
      });
  }
}
