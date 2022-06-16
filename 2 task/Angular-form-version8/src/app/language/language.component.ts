import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent {
  @Input() secondFormGroup: FormGroup;
  languageGroup: FormGroup;
  language: Array<any> = [
    {name: 'English', value: 'English'},
    {name: 'Spanish', value: 'Spanish'},
    {name: 'Italian', value: 'Italian'},
    {name: 'Hindi', value: 'Hindi'},
    {name: 'Russian', value: 'Russian'},
    {name: 'German', value: 'German'},
  ];
  language1: Array<any> = [
    {name: 'French', value: 'French'},
    {name: 'Arabic', value: 'Arabic'},
    {name: 'Greek', value: 'Greek'},
    {name: 'Mandarin', value: 'Mandarin'},
    {name: 'Portuguese', value: 'Portuguese'}
  ];

  constructor(private fb: FormBuilder) {
    this.languageGroup = this.fb.group({
      checkArray: this.fb.array([], [Validators.required])
    });
  }

  onCheckboxChange(e) {
    const checkArray: FormArray = this.languageGroup.get('checkArray') as FormArray;
    // console.log(checkArray.value);

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

  submitForm() {
    console.log(this.languageGroup.value);
  }
}
