import {Component, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, FormArray, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.css']
})
export class CertificationComponent {
  showhidepregnant: boolean;
  showhideHealth: boolean;
  private certiform: FormGroup;
  CGcertificationform: FormGroup = new FormGroup({
    CGNurseCertificationNo: new FormControl('', Validators.required),
  });
  HealthcareAttendanNoform: FormGroup = new FormGroup({
    HealthcareAttendanNo: new FormControl('', Validators.required),
  });
  constructor(private fb: FormBuilder) {
    this.certiform = this.fb.group({
      checkArray: this.fb.array([], [Validators.required]),
      Nurse: ['', Validators.required],
      Auxiliary_Nurse: ['', Validators.required],
      Health: [null],
      // CGNurseCertificationNo: [null, Validators.required],
      // HealthcareAttendanNo: [null, Validators.required],
      // CPR : [''],
      others: [''],

    });
  }

  // @Input() certification: string;
  form: FormGroup;
  Data: Array<any> = [
    {name: 'Registered Nurse (RN)', value: 'Registered Nurse (RN)'},
    {name: 'Auxiliary Nurse - Nurse assistant', value: 'Auxiliary Nurse - Nurse assistant'},
    // {name: 'Healthcare attendant (PAB)', value: 'Healthcare attendant (PAB)'},
    // {name: 'CPR or other', value: 'CPR or other'},
  ];
  Dataq: Array<any> = [
    {name: '', value: 'other'},
  ];

  onCheckboxChange(e) {
    const checkArray: FormArray = this.form.get('checkArray') as FormArray;
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

  checkCheckBoxvalue(event) {
    // const checkArray: FormArray = this.form.get('checkArray') as FormArray;
    console.log('Nurse:', event.checked);
  }

  checkCheckBoxvalue1(event) {
    console.log('Health:', event.checked);
  }

  checkCheckBoxvalue2(event) {
    console.log('CPR or other:', event.checked);
  }

  checkCheckBoxvalue3(event) {
    console.log('other:', event.checked);
  }

  public errorHandling = (control: string, error: string) => {
    return this.certiform.controls[control].hasError(error);
  }

  submitForm() {
    // console.log(this.form.value);
    // console.log(this.certification);
  }
}
