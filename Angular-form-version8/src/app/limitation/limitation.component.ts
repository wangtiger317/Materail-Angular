import {Component, Input, OnInit} from '@angular/core';
import { FormBuilder, ControlValueAccessor, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import validate = WebAssembly.validate;

@Component({
  selector: 'app-limitation',
  templateUrl: './limitation.component.html',
  styleUrls: ['./limitation.component.css']
})
export class LimitationComponent  {
  @Input() secondFormGroup: FormGroup;
  submitted = false;
  Surgery: boolean;
  weaknesses: boolean;
  CheckBoxFormGroup: FormGroup;
  Data: Array<any> = [
    {name: 'None', value: 'None'},
    {name: 'Salt', value: 'Salt'},
    {name: 'Auditive', value: 'Auditive'},
    {name: 'Language barrier', value: 'Language barrier'},
    {name: 'Cane / walker / wheelchair', value: 'Cane / walker / wheelchair'},
    // {name: 'Surgery*', value: 'Surgery*'},
  ];
  data: Array<any> = [
    {name: 'Sugar/sweets', value: 'Sugar/sweets'},
    {name: 'Consistency of food', value: 'Consistency of food'},
    {name: 'Visual', value: 'Visua'},
    {name: 'Dentures', value: 'Dentures'},
    {name: 'GBlood pressure (prone to dizziness or risks of falls)', value: 'Blood pressure (prone to dizziness or risks of falls)'},
    {name: 'Driving (short drives)', value: 'Driving (short drives)'},
    // {name: 'Physical weaknesses*', value: 'Physical weaknesses*'},
  ];
  Edata: Array<any> = [
    {name: 'Eyeglasses', value: 'Eyeglasses'},
    {name: 'Dentures', value: 'Dentures'},
    {name: 'Walker', value: 'Walker'},
  ];
  Dataqq: Array<any> = [
    {name: '', value: ''},
  ];

  Dataq: Array<any> = [
    {name: 'Hearing Aids*', value: 'Hearing Aids*'},
    {name: 'Cane', value: 'Cane'},
    {name: 'Wheelchair', value: 'Wheelchair'},
  ];
  EEE: Array<any> = [
    {name: 'Playing cards', value: 'Playing cards'},
    {name: 'Puzzles', value: 'Puzzles'},
    {name: 'Reading', value: 'Reading'},
    {name: 'TV shows*', value: 'TV shows*'},
    {name: 'Music*', value: 'Music*'},
  ];
  FFF: Array<any> = [
    {name: '', value: 'others'},
  ];
  form = new FormGroup({
    surgeries: new FormControl('', Validators.required),
    weaknesses: new FormControl('', Validators.required),
    surgery: new FormControl('', Validators.required),
    weak: new FormControl('', Validators.required),
    Equipment: new FormControl('', Validators.required),
    others_aids: new FormControl('', Validators.required),
    Aids: new FormControl('', Validators.required),
    Routine: new FormControl('', Validators.required),
    Habits_others: new FormControl('', Validators.required),

  });
  constructor(private fb: FormBuilder) {
    this.CheckBoxFormGroup = this.fb.group({
      checkArray: this.fb.array([], [Validators.required]),
      // surgeries: ['', [Validators.required]],
      // weaknesses: ['', [Validators.required]],
      // surgery: ['', [Validators.required]],
      // weak: ['', [Validators.required]],
      // Equipment: ['', [Validators.required]],
      // others_aids: ['', [Validators.required]],
      // Aids: ['', [Validators.required]],
      // Routine: ['', [Validators.required]],
      // Habits_others: ['', [Validators.required]],
    });
  }
  // ngOnInit() {
  //   this.CheckBoxFormGroup = this.fb.group({
  //     });
  // }
  onCheckboxChange(e) {
    const checkArray: FormArray = this.CheckBoxFormGroup.get('checkArray') as FormArray;

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
    return this.CheckBoxFormGroup.controls[control].hasError(error);
  }
  submit() {
    this.submitted = true;
    if (this.CheckBoxFormGroup.invalid) {
      return;
    }
    console.log(this.CheckBoxFormGroup.value);
  }

}

