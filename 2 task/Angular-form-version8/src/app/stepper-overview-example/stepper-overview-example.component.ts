// import {Component, Input, OnInit} from '@angular/core';
// import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
// import {MatRadioButton} from '@angular/material';
// import {requiredFileType} from '../requiredFileType';
// export interface Country {
//   value: string;
//   viewValue: string;
// }
//
// @Component({
//   selector: 'app-stepper-overview-example',
//   templateUrl: './stepper-overview-example.component.html',
//   styleUrls: ['./stepper-overview-example.component.css']
// })
// export class StepperOverviewExampleComponent implements OnInit {
//   @Input()
//   checked: boolean;
//   isLinear = false;
//   submitted = false;
//   firstFormGroup: FormGroup;
//   secondFormGroup: FormGroup;
//   required: boolean;
//   value: boolean;
//   selectFormControl = new FormControl('', Validators.required);
//   CheckBoxFormControl = new FormControl('', Validators.required);
//
//   Country: Country[] = [
//     {value: 'Afghanistan', viewValue: 'Afghanistan'},
//     {value: 'Åland Islands', viewValue: 'Åland Islands'},
//     {value: 'Albania', viewValue: 'Albania'},
//     {value: 'Algeria', viewValue: 'Algeria'},
//     {value: 'American Samoa', viewValue: 'American Samoa'},
//     {value: 'Andorra', viewValue: 'Andorra'},
//     {value: 'Angola', viewValue: 'Angola'},
//     {value: 'Anguilla', viewValue: 'Anguilla'},
//     {value: 'Antarctica', viewValue: 'Antarctica'},
//     {value: 'Austria', viewValue: 'Austria'},
//     {value: 'Bahamas', viewValue: 'Bahamas'},
//     {value: 'Bahrain', viewValue: 'Bahrain'},
//     {value: 'Bangladesh', viewValue: 'Bangladesh'},
//     {value: 'Barbados', viewValue: 'Barbados'},
//     {value: 'Belarus', viewValue: 'Belarus'},
//     {value: 'Belgium', viewValue: 'Belgium'},
//     {value: 'Belize', viewValue: 'Belize'},
//     {value: 'Benin', viewValue: 'Benin'},
//     {value: 'Bhutan', viewValue: 'Bhutan'},
//     {value: 'Bolivia', viewValue: 'Bolivia'},
//     {value: 'Bosnia and Herzegovina', viewValue: 'Bosnia and Herzegovina'},
//     {value: 'Botswana', viewValue: 'Botswana'},
//     {value: 'Brazil', viewValue: 'Brazil'},
//     {value: 'Brunei', viewValue: 'Brunei'},
//     {value: 'Bulgaria', viewValue: 'Bulgaria'},
//     {value: 'Burkina Faso', viewValue: 'Burkina Faso'},
//     {value: 'Burundi', viewValue: 'Burundi'},
//     {value: 'Cabo Verde', viewValue: 'Cabo Verde'},
//     {value: 'Cambodia', viewValue: 'Cambodia'},
//     {value: 'Cameroon', viewValue: 'Cameroon'},
//     {value: 'Canada', viewValue: 'Canada'},
//     {value: 'Central African Republic (CAR)', viewValue: 'Central African Republic (CAR)'},
//     {value: 'Chad', viewValue: 'Chad'},
//     {value: 'Chile', viewValue: 'Chile'},
//     {value: 'China', viewValue: 'China'},
//     {value: 'Colombia', viewValue: 'Colombia'},
//     {value: 'Comoros', viewValue: 'Comoros'},
//     {value: 'Congo, Democratic Republic of the', viewValue: 'Congo, Democratic Republic of the'},
//     {value: 'Congo, Republic of the', viewValue: 'Congo, Republic of the'},
//     {value: 'Costa Rica', viewValue: 'Costa Rica'},
//     {value: 'Cote dIvoire', viewValue: 'Cote dIvoire'},
//     {value: 'Croatia', viewValue: 'Croatia'},
//     {value: 'Cuba', viewValue: 'Cuba'},
//     {value: 'Cyprus', viewValue: 'Cyprus'},
//     {value: 'Czechia', viewValue: 'Czechia'},
//     {value: 'Denmark', viewValue: 'Denmark'},
//     {value: 'Djibouti', viewValue: 'Djibouti'},
//     {value: 'Dominica', viewValue: 'Dominica'},
//     {value: 'Dominican Republic', viewValue: 'Dominican Republic'},
//     {value: 'Ecuador', viewValue: 'Ecuador'},
//     {value: 'Egypt', viewValue: 'Egypt'},
//     {value: 'El Salvador', viewValue: 'El Salvador'},
//     {value: 'Equatorial Guinea', viewValue: 'Equatorial Guinea'},
//     {value: 'Eritrea', viewValue: 'Eritrea'},
//     {value: 'Estonia', viewValue: 'Estonia'},
//     {value: 'Eswatini (formerly Swaziland)', viewValue: 'Eswatini (formerly Swaziland)'},
//     {value: 'Ethiopia', viewValue: 'Ethiopia'},
//     {value: 'Fiji', viewValue: 'Fiji'},
//     {value: 'Finland', viewValue: 'Finland'},
//     {value: 'France', viewValue: 'France'},
//     {value: 'Gabon', viewValue: 'Gabon'},
//     {value: 'Gambia', viewValue: 'Gambia'},
//     {value: 'Georgia', viewValue: 'Georgia'},
//     {value: 'Germany', viewValue: 'Germany'},
//     {value: 'Ghana', viewValue: 'Ghana'},
//     {value: 'Greece', viewValue: 'Greece'},
//     {value: 'Grenada', viewValue: 'Grenada'},
//     {value: 'Guatemala', viewValue: 'Guatemala'},
//     {value: 'Guinea', viewValue: 'Guinea'},
//     {value: 'Guinea-Bissau', viewValue: 'Guinea-Bissau'},
//     {value: 'Guyana', viewValue: 'Guyana'},
//     {value: 'Haiti', viewValue: 'Haiti'},
//     {value: 'Honduras', viewValue: 'Honduras'},
//     {value: 'Hungary', viewValue: 'Hungary'},
//     {value: 'Iceland', viewValue: 'Iceland'},
//     {value: 'India', viewValue: 'India'},
//     {value: 'Indonesia', viewValue: 'Indonesia'},
//     {value: 'Iran', viewValue: 'Iran'},
//     {value: 'Iraq', viewValue: 'Iraq'},
//     {value: 'Ireland', viewValue: 'Ireland'},
//     {value: 'Israel', viewValue: 'Israel'},
//     {value: 'Italy', viewValue: 'Italy'},
//     {value: 'Jamaica', viewValue: 'Jamaica'},
//     {value: 'Japan', viewValue: 'Japan'},
//     {value: 'Jordan', viewValue: 'Jordan'},
//     {value: 'Kazakhstan', viewValue: 'Kazakhstan'},
//     {value: 'Kenya', viewValue: 'Kenya'},
//     {value: 'Kiribati', viewValue: 'Kiribati'},
//     {value: 'Kosovo', viewValue: 'Kosovo'},
//     {value: 'Kuwait', viewValue: 'Kuwait'},
//     {value: 'Kyrgyzstan', viewValue: 'Kyrgyzstan'},
//     {value: 'Laos', viewValue: 'Laos'},
//     {value: 'Latvia', viewValue: 'Latvia'},
//     {value: 'Lebanon', viewValue: 'Lebanon'},
//     {value: 'Lesotho', viewValue: 'Lesotho'},
//     {value: 'Liberia', viewValue: 'Liberia'},
//     {value: 'Libya', viewValue: 'Libya'},
//     {value: 'Liechtenstein', viewValue: 'Liechtenstein'},
//     {value: 'Lithuania', viewValue: 'Lithuania'},
//     {value: 'Luxembourg', viewValue: 'Luxembourg'},
//     {value: 'Madagascar', viewValue: 'Madagascar'},
//     {value: 'Malawi', viewValue: 'Malawi'},
//     {value: 'Malaysia', viewValue: 'Malaysia'},
//     {value: 'Maldives', viewValue: 'Maldives'},
//     {value: 'Mali', viewValue: 'Mali'},
//     {value: 'Malta', viewValue: 'Malta'},
//     {value: 'Marshall Islands', viewValue: 'Marshall Islands'},
//     {value: 'Mauritania', viewValue: 'Mauritania'},
//     {value: 'Mauritius', viewValue: 'Mauritius'},
//     {value: 'Mexico', viewValue: 'Mexico'},
//     {value: 'Micronesia', viewValue: 'Micronesia'},
//     {value: 'Moldova', viewValue: 'Moldova'},
//     {value: 'Monaco', viewValue: 'Monaco'},
//     {value: 'Mongolia', viewValue: 'Mongolia'},
//     {value: 'Montenegro', viewValue: 'Montenegro'},
//     {value: 'Morocco', viewValue: 'Morocco'},
//     {value: 'Mozambique', viewValue: 'Mozambique'},
//     {value: 'Myanmar (formerly Burma)', viewValue: 'Myanmar (formerly Burma)'},
//     {value: 'Namibia', viewValue: 'Namibia'},
//     {value: 'Nauru', viewValue: 'Nauru'},
//     {value: 'Nepal', viewValue: 'Nepal'},
//     {value: 'Netherlands', viewValue: 'Netherlands'},
//     {value: 'New Zealand', viewValue: 'New Zealand'},
//     {value: 'Nicaragua', viewValue: 'Nicaragua'},
//     {value: 'Niger', viewValue: 'Niger'},
//     {value: 'Nigeria', viewValue: 'Nigeria'},
//     {value: 'North Korea', viewValue: 'North Korea'},
//     {value: 'North Macedonia (formerly Macedonia)', viewValue: 'North Macedonia (formerly Macedonia)'},
//     {value: 'Norway', viewValue: 'Norway'},
//     {value: 'Oman', viewValue: 'Oman'},
//     {value: 'Pakistan', viewValue: 'Pakistan'},
//     {value: 'Palau', viewValue: 'Palau'},
//     {value: 'Palestine', viewValue: 'Palestine'},
//     {value: 'Panama', viewValue: 'Panama'},
//     {value: 'Papua New Guinea', viewValue: 'Papua New Guinea'},
//     {value: 'Paraguay', viewValue: 'Paraguay'},
//     {value: 'Peru', viewValue: 'Peru'},
//     {value: 'Philippines', viewValue: 'Philippines'},
//     {value: 'Poland', viewValue: 'Poland'},
//     {value: 'Portugal', viewValue: 'Portugal'},
//     {value: 'Qatar', viewValue: 'Qatar'},
//     {value: 'Romania', viewValue: 'Romania'},
//     {value: 'Russia', viewValue: 'Russia'},
//     {value: 'Rwanda', viewValue: 'Rwanda'},
//     {value: 'Saint Kitts and Nevis', viewValue: 'Saint Kitts and Nevis'},
//     {value: 'Saint Lucia', viewValue: 'Saint Lucia'},
//     {value: 'Saint Vincent and the Grenadines', viewValue: 'Saint Vincent and the Grenadines'},
//     {value: 'Samoa', viewValue: 'Samoa'},
//     {value: 'San Marino', viewValue: 'San Marino'},
//     {value: 'Sao Tome and Principe', viewValue: 'Sao Tome and Principe'},
//     {value: 'Saudi Arabia', viewValue: 'Saudi Arabia'},
//     {value: 'Senegal', viewValue: 'Senegal'},
//     {value: 'Serbia', viewValue: 'Serbia'},
//     {value: 'Seychelles', viewValue: 'Seychelles'},
//     {value: 'Sierra Leone', viewValue: 'Sierra Leone'},
//     {value: 'Singapore', viewValue: 'Singapore'},
//     {value: 'Slovakia', viewValue: 'Slovakia'},
//     {value: 'Slovenia', viewValue: 'Slovenia'},
//     {value: 'Solomon Islands', viewValue: 'Solomon Islands'},
//     {value: 'Somalia', viewValue: 'Somalia'},
//     {value: 'South Africa', viewValue: 'South Africa'},
//     {value: 'South Korea', viewValue: 'South Korea'},
//     {value: 'South Sudan', viewValue: 'South Sudan'},
//     {value: 'Spain', viewValue: 'Spain'},
//     {value: 'Sri Lanka', viewValue: 'Sri Lanka'},
//     {value: 'Sudan', viewValue: 'Sudan'},
//     {value: 'Suriname', viewValue: 'Suriname'},
//     {value: 'Sweden', viewValue: 'Sweden'},
//     {value: 'Switzerland', viewValue: 'Switzerland'},
//     {value: 'Syria', viewValue: 'Syria'},
//     {value: 'Taiwan', viewValue: 'Taiwan'},
//     {value: 'Tajikistan', viewValue: 'Tajikistan'},
//     {value: 'Tanzania', viewValue: 'Tanzania'},
//     {value: 'Thailand', viewValue: 'Thailand'},
//     {value: 'Timor-Leste', viewValue: 'Timor-Leste'},
//     {value: 'Togo', viewValue: 'Togo'},
//     {value: 'Tonga', viewValue: 'Tonga'},
//     {value: 'Trinidad and Tobago', viewValue: 'Trinidad and Tobago'},
//     {value: 'Tunisia', viewValue: 'Tunisia'},
//     {value: 'Turkey', viewValue: 'Turkey'},
//     {value: 'Turkmenistan', viewValue: 'Turkmenistan'},
//     {value: 'Tuvalu', viewValue: 'Tuvalu'},
//     {value: 'Uganda', viewValue: 'Uganda'},
//     {value: 'Ukraine', viewValue: 'Ukraine'},
//     {value: 'United Arab Emirates (UAE)', viewValue: 'United Arab Emirates (UAE)'},
//     {value: 'United Kingdom (UK)', viewValue: 'United Kingdom (UK)'},
//     {value: 'United States of America (USA)', viewValue: 'United States of America (USA)'},
//     {value: 'Uruguay', viewValue: 'Uruguay'},
//     {value: 'Uzbekistan', viewValue: 'Uzbekistan'},
//     {value: 'Vanuatu', viewValue: 'Vanuatu'},
//     {value: 'Vatican City (Holy See)', viewValue: 'Vatican City (Holy See)'},
//     {value: 'Venezuela', viewValue: 'Venezuela'},
//     {value: 'Vietnam', viewValue: 'Vietnam'},
//     {value: 'Yemen', viewValue: 'Yemen'},
//     {value: 'Zambia', viewValue: 'Zambia'},
//     {value: 'Zimbabwe', viewValue: 'Zimbabwe'},
//   ];
//   Data: Array<any> = [
//     {name: 'Companionship', value: 'Companionship'},
//     {name: 'Light cleaning', value: 'Light cleaning'},
//     {name: 'Medication administation', value: 'Medication administation'},
//     {name: 'Food preparation', value: 'Food preparation'},
//     {name: 'Groceries / errands', value: 'Groceries / errands'},
//     {name: 'Driving (short drives)', value: 'Driving (short drives)'},
//     {name: 'Hygiene', value: 'Hygiene'},
//     {name: 'Foot care', value: 'Foot care'},
//     {name: 'Hairdressing / haircut', value: 'Hairdressing / haircut'},
//     {name: 'Massotherapy', value: 'Massotherapy'},
//     {name: 'Physio Therapy', value: 'Physio Therapy'},
//     {name: 'Fitness / Training', value: 'Fitness / Training'},
//     {name: 'Handyman / Home repairs', value: 'Handyman / Home repairs'},
//     {name: 'Household organization', value: 'Household organization'},
//     {name: 'Garden work / snow shoveling', value: 'Garden work / snow shoveling'}
//   ];
//
//
//   // tslint:disable-next-line:variable-name
//   constructor(private _formBuilder: FormBuilder) {
//   }
//   ngOnInit() {
//     this.firstFormGroup = this._formBuilder.group({
//       firstCtrl: ['', Validators.required],
//       image: new FormControl(null, [Validators.required, requiredFileType('png')]),
//
//     });
//     this.secondFormGroup = this._formBuilder.group({
//       secondCtrl: [null, [Validators.required]],
//       certification: [null, [Validators.required]]
//       // checkArray: this._formBuilder.array([], [Validators.required])
//     });
//   }
//   public errorHandling = (control: string, error: string) => {
//     return this.firstFormGroup.controls[control].hasError(error);
//   }
//   onCheckboxChange(e) {
//     const checkArray: FormArray = this.secondFormGroup.get('checkArray') as FormArray;
//
//     if (e.target.checked) {
//       checkArray.push(new FormControl(e.target.value));
//     } else {
//       let i = 0;
//       checkArray.controls.forEach((item: FormControl) => {
//         // tslint:disable-next-line:triple-equals
//         if (item.value == e.target.value) {
//           checkArray.removeAt(i);
//           return;
//         }
//         i++;
//       });
//     }
//   }
//
//   // public errorHandling1 = (control: string, error: string) => {
//   //   return this.secondFormGroup.controls[control].hasError(error);
//   // }
//
//   submitForm() {
//     this.submitted = true;
//     if (this.firstFormGroup.invalid) {
//       return;
//     }
//     console.log(this.firstFormGroup.value);
//     console.log(this.secondFormGroup.value);
//   }
//
// }
import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CertificationComponent} from '../certification/certification.component';
import {CaregiverComponent} from '../caregiver/caregiver.component';
import {LanguageComponent} from '../language/language.component';
import {BlockCardComponent} from '../block-card/block-card.component';
import {SpecailComponent} from '../specail/specail.component';

import {requiredFileType} from '../requiredFileType';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {from} from 'rxjs';
import {MatSelectChange} from '@angular/material';

/**
 * @title Stepper with optional steps
 */
export interface Country {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-stepper-overview-example',
  templateUrl: './stepper-overview-example.component.html',
  styleUrls: ['./stepper-overview-example.component.css']
})
export class StepperOverviewExampleComponent implements OnInit {
  // @ts-ignore
  @ViewChild(CertificationComponent) certification;
  // @ts-ignore
  @ViewChild(CaregiverComponent) caregiver;
  // @ts-ignore
  @ViewChild(LanguageComponent) language;
  // @ts-ignore
  @ViewChild(BlockCardComponent) block;
  // @ts-ignore
  @ViewChild(SpecailComponent) specie;
  // @ts-ignore
  @ViewChild(BlockCardComponent) block;

  // @ts-ignore
  @ViewChild(BlockCardComponent) block;


  @Output()
  selectionChange: EventEmitter<MatSelectChange>;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isOptional = false;
  selectedValue: string;
  neighbour: string;
  Country: Country[] = [
    {value: 'Afghanistan', viewValue: 'Afghanistan'},
    {value: 'Åland Islands', viewValue: 'Åland Islands'},
    {value: 'Albania', viewValue: 'Albania'},
    {value: 'Algeria', viewValue: 'Algeria'},
    {value: 'American Samoa', viewValue: 'American Samoa'},
    {value: 'Andorra', viewValue: 'Andorra'},
    {value: 'Angola', viewValue: 'Angola'},
    {value: 'Anguilla', viewValue: 'Anguilla'},
    {value: 'Antarctica', viewValue: 'Antarctica'},
    {value: 'Austria', viewValue: 'Austria'},
    {value: 'Bahamas', viewValue: 'Bahamas'},
    {value: 'Bahrain', viewValue: 'Bahrain'},
    {value: 'Bangladesh', viewValue: 'Bangladesh'},
    {value: 'Barbados', viewValue: 'Barbados'},
    {value: 'Belarus', viewValue: 'Belarus'},
    {value: 'Belgium', viewValue: 'Belgium'},
    {value: 'Belize', viewValue: 'Belize'},
    {value: 'Benin', viewValue: 'Benin'},
    {value: 'Bhutan', viewValue: 'Bhutan'},
    {value: 'Bolivia', viewValue: 'Bolivia'},
    {value: 'Bosnia and Herzegovina', viewValue: 'Bosnia and Herzegovina'},
    {value: 'Botswana', viewValue: 'Botswana'},
    {value: 'Brazil', viewValue: 'Brazil'},
    {value: 'Brunei', viewValue: 'Brunei'},
    {value: 'Bulgaria', viewValue: 'Bulgaria'},
    {value: 'Burkina Faso', viewValue: 'Burkina Faso'},
    {value: 'Burundi', viewValue: 'Burundi'},
    {value: 'Cabo Verde', viewValue: 'Cabo Verde'},
    {value: 'Cambodia', viewValue: 'Cambodia'},
    {value: 'Cameroon', viewValue: 'Cameroon'},
    {value: 'Canada', viewValue: 'Canada'},
    {value: 'Central African Republic (CAR)', viewValue: 'Central African Republic (CAR)'},
    {value: 'Chad', viewValue: 'Chad'},
    {value: 'Chile', viewValue: 'Chile'},
    {value: 'China', viewValue: 'China'},
    {value: 'Colombia', viewValue: 'Colombia'},
    {value: 'Comoros', viewValue: 'Comoros'},
    {value: 'Congo, Democratic Republic of the', viewValue: 'Congo, Democratic Republic of the'},
    {value: 'Congo, Republic of the', viewValue: 'Congo, Republic of the'},
    {value: 'Costa Rica', viewValue: 'Costa Rica'},
    {value: 'Cote dIvoire', viewValue: 'Cote dIvoire'},
    {value: 'Croatia', viewValue: 'Croatia'},
    {value: 'Cuba', viewValue: 'Cuba'},
    {value: 'Cyprus', viewValue: 'Cyprus'},
    {value: 'Czechia', viewValue: 'Czechia'},
    {value: 'Denmark', viewValue: 'Denmark'},
    {value: 'Djibouti', viewValue: 'Djibouti'},
    {value: 'Dominica', viewValue: 'Dominica'},
    {value: 'Dominican Republic', viewValue: 'Dominican Republic'},
    {value: 'Ecuador', viewValue: 'Ecuador'},
    {value: 'Egypt', viewValue: 'Egypt'},
    {value: 'El Salvador', viewValue: 'El Salvador'},
    {value: 'Equatorial Guinea', viewValue: 'Equatorial Guinea'},
    {value: 'Eritrea', viewValue: 'Eritrea'},
    {value: 'Estonia', viewValue: 'Estonia'},
    {value: 'Eswatini (formerly Swaziland)', viewValue: 'Eswatini (formerly Swaziland)'},
    {value: 'Ethiopia', viewValue: 'Ethiopia'},
    {value: 'Fiji', viewValue: 'Fiji'},
    {value: 'Finland', viewValue: 'Finland'},
    {value: 'France', viewValue: 'France'},
    {value: 'Gabon', viewValue: 'Gabon'},
    {value: 'Gambia', viewValue: 'Gambia'},
    {value: 'Georgia', viewValue: 'Georgia'},
    {value: 'Germany', viewValue: 'Germany'},
    {value: 'Ghana', viewValue: 'Ghana'},
    {value: 'Greece', viewValue: 'Greece'},
    {value: 'Grenada', viewValue: 'Grenada'},
    {value: 'Guatemala', viewValue: 'Guatemala'},
    {value: 'Guinea', viewValue: 'Guinea'},
    {value: 'Guinea-Bissau', viewValue: 'Guinea-Bissau'},
    {value: 'Guyana', viewValue: 'Guyana'},
    {value: 'Haiti', viewValue: 'Haiti'},
    {value: 'Honduras', viewValue: 'Honduras'},
    {value: 'Hungary', viewValue: 'Hungary'},
    {value: 'Iceland', viewValue: 'Iceland'},
    {value: 'India', viewValue: 'India'},
    {value: 'Indonesia', viewValue: 'Indonesia'},
    {value: 'Iran', viewValue: 'Iran'},
    {value: 'Iraq', viewValue: 'Iraq'},
    {value: 'Ireland', viewValue: 'Ireland'},
    {value: 'Israel', viewValue: 'Israel'},
    {value: 'Italy', viewValue: 'Italy'},
    {value: 'Jamaica', viewValue: 'Jamaica'},
    {value: 'Japan', viewValue: 'Japan'},
    {value: 'Jordan', viewValue: 'Jordan'},
    {value: 'Kazakhstan', viewValue: 'Kazakhstan'},
    {value: 'Kenya', viewValue: 'Kenya'},
    {value: 'Kiribati', viewValue: 'Kiribati'},
    {value: 'Kosovo', viewValue: 'Kosovo'},
    {value: 'Kuwait', viewValue: 'Kuwait'},
    {value: 'Kyrgyzstan', viewValue: 'Kyrgyzstan'},
    {value: 'Laos', viewValue: 'Laos'},
    {value: 'Latvia', viewValue: 'Latvia'},
    {value: 'Lebanon', viewValue: 'Lebanon'},
    {value: 'Lesotho', viewValue: 'Lesotho'},
    {value: 'Liberia', viewValue: 'Liberia'},
    {value: 'Libya', viewValue: 'Libya'},
    {value: 'Liechtenstein', viewValue: 'Liechtenstein'},
    {value: 'Lithuania', viewValue: 'Lithuania'},
    {value: 'Luxembourg', viewValue: 'Luxembourg'},
    {value: 'Madagascar', viewValue: 'Madagascar'},
    {value: 'Malawi', viewValue: 'Malawi'},
    {value: 'Malaysia', viewValue: 'Malaysia'},
    {value: 'Maldives', viewValue: 'Maldives'},
    {value: 'Mali', viewValue: 'Mali'},
    {value: 'Malta', viewValue: 'Malta'},
    {value: 'Marshall Islands', viewValue: 'Marshall Islands'},
    {value: 'Mauritania', viewValue: 'Mauritania'},
    {value: 'Mauritius', viewValue: 'Mauritius'},
    {value: 'Mexico', viewValue: 'Mexico'},
    {value: 'Micronesia', viewValue: 'Micronesia'},
    {value: 'Moldova', viewValue: 'Moldova'},
    {value: 'Monaco', viewValue: 'Monaco'},
    {value: 'Mongolia', viewValue: 'Mongolia'},
    {value: 'Montenegro', viewValue: 'Montenegro'},
    {value: 'Morocco', viewValue: 'Morocco'},
    {value: 'Mozambique', viewValue: 'Mozambique'},
    {value: 'Myanmar (formerly Burma)', viewValue: 'Myanmar (formerly Burma)'},
    {value: 'Namibia', viewValue: 'Namibia'},
    {value: 'Nauru', viewValue: 'Nauru'},
    {value: 'Nepal', viewValue: 'Nepal'},
    {value: 'Netherlands', viewValue: 'Netherlands'},
    {value: 'New Zealand', viewValue: 'New Zealand'},
    {value: 'Nicaragua', viewValue: 'Nicaragua'},
    {value: 'Niger', viewValue: 'Niger'},
    {value: 'Nigeria', viewValue: 'Nigeria'},
    {value: 'North Korea', viewValue: 'North Korea'},
    {value: 'North Macedonia (formerly Macedonia)', viewValue: 'North Macedonia (formerly Macedonia)'},
    {value: 'Norway', viewValue: 'Norway'},
    {value: 'Oman', viewValue: 'Oman'},
    {value: 'Pakistan', viewValue: 'Pakistan'},
    {value: 'Palau', viewValue: 'Palau'},
    {value: 'Palestine', viewValue: 'Palestine'},
    {value: 'Panama', viewValue: 'Panama'},
    {value: 'Papua New Guinea', viewValue: 'Papua New Guinea'},
    {value: 'Paraguay', viewValue: 'Paraguay'},
    {value: 'Peru', viewValue: 'Peru'},
    {value: 'Philippines', viewValue: 'Philippines'},
    {value: 'Poland', viewValue: 'Poland'},
    {value: 'Portugal', viewValue: 'Portugal'},
    {value: 'Qatar', viewValue: 'Qatar'},
    {value: 'Romania', viewValue: 'Romania'},
    {value: 'Russia', viewValue: 'Russia'},
    {value: 'Rwanda', viewValue: 'Rwanda'},
    {value: 'Saint Kitts and Nevis', viewValue: 'Saint Kitts and Nevis'},
    {value: 'Saint Lucia', viewValue: 'Saint Lucia'},
    {value: 'Saint Vincent and the Grenadines', viewValue: 'Saint Vincent and the Grenadines'},
    {value: 'Samoa', viewValue: 'Samoa'},
    {value: 'San Marino', viewValue: 'San Marino'},
    {value: 'Sao Tome and Principe', viewValue: 'Sao Tome and Principe'},
    {value: 'Saudi Arabia', viewValue: 'Saudi Arabia'},
    {value: 'Senegal', viewValue: 'Senegal'},
    {value: 'Serbia', viewValue: 'Serbia'},
    {value: 'Seychelles', viewValue: 'Seychelles'},
    {value: 'Sierra Leone', viewValue: 'Sierra Leone'},
    {value: 'Singapore', viewValue: 'Singapore'},
    {value: 'Slovakia', viewValue: 'Slovakia'},
    {value: 'Slovenia', viewValue: 'Slovenia'},
    {value: 'Solomon Islands', viewValue: 'Solomon Islands'},
    {value: 'Somalia', viewValue: 'Somalia'},
    {value: 'South Africa', viewValue: 'South Africa'},
    {value: 'South Korea', viewValue: 'South Korea'},
    {value: 'South Sudan', viewValue: 'South Sudan'},
    {value: 'Spain', viewValue: 'Spain'},
    {value: 'Sri Lanka', viewValue: 'Sri Lanka'},
    {value: 'Sudan', viewValue: 'Sudan'},
    {value: 'Suriname', viewValue: 'Suriname'},
    {value: 'Sweden', viewValue: 'Sweden'},
    {value: 'Switzerland', viewValue: 'Switzerland'},
    {value: 'Syria', viewValue: 'Syria'},
    {value: 'Taiwan', viewValue: 'Taiwan'},
    {value: 'Tajikistan', viewValue: 'Tajikistan'},
    {value: 'Tanzania', viewValue: 'Tanzania'},
    {value: 'Thailand', viewValue: 'Thailand'},
    {value: 'Timor-Leste', viewValue: 'Timor-Leste'},
    {value: 'Togo', viewValue: 'Togo'},
    {value: 'Tonga', viewValue: 'Tonga'},
    {value: 'Trinidad and Tobago', viewValue: 'Trinidad and Tobago'},
    {value: 'Tunisia', viewValue: 'Tunisia'},
    {value: 'Turkey', viewValue: 'Turkey'},
    {value: 'Turkmenistan', viewValue: 'Turkmenistan'},
    {value: 'Tuvalu', viewValue: 'Tuvalu'},
    {value: 'Uganda', viewValue: 'Uganda'},
    {value: 'Ukraine', viewValue: 'Ukraine'},
    {value: 'United Arab Emirates (UAE)', viewValue: 'United Arab Emirates (UAE)'},
    {value: 'United Kingdom (UK)', viewValue: 'United Kingdom (UK)'},
    {value: 'United States of America (USA)', viewValue: 'United States of America (USA)'},
    {value: 'Uruguay', viewValue: 'Uruguay'},
    {value: 'Uzbekistan', viewValue: 'Uzbekistan'},
    {value: 'Vanuatu', viewValue: 'Vanuatu'},
    {value: 'Vatican City (Holy See)', viewValue: 'Vatican City (Holy See)'},
    {value: 'Venezuela', viewValue: 'Venezuela'},
    {value: 'Vietnam', viewValue: 'Vietnam'},
    {value: 'Yemen', viewValue: 'Yemen'},
    {value: 'Zambia', viewValue: 'Zambia'},
    {value: 'Zimbabwe', viewValue: 'Zimbabwe'},
  ];
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
  // tslint:disable-next-line:variable-name
  private submitted: boolean;
  form: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
  });
  certificationform: FormGroup = new FormGroup({
    certification: new FormControl('', Validators.required),
  });
  selectcertification: FormGroup = new FormGroup({
    select: new FormControl('null', Validators.required),
  });
  // @ts-ignore
  // tslint:disable-next-line:variable-name
  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      // firstName: ['', Validators.required],
      // lastName: ['', Validators.required],
      Address: ['', Validators.required],
      City: ['', Validators.required],
      State: ['', Validators.required],
      Postal: ['', Validators.required],
      Country: ['', Validators.required],
      // gender: ['', Validators.required],
      // image: new FormControl(null, [Validators.required, requiredFileType('png')]),
      // image: ['', Validators.required],

    });
    this.secondFormGroup = this._formBuilder.group({
      checkArray: this._formBuilder.array([], [Validators.required]),
      // certification: new FormControl('', Validators.required),
      // select: [null],
      // secondcheckbox: ['', Validators.required],

    });
  }

  checkCheckBoxvalue(event) {
    console.log('checked:', event.checked);
  }

  public errorHandling = (control: string, error: string) => {
    return this.firstFormGroup.controls[control].hasError(error);
  }
  public errorHandling2 = (control: string, error: string) => {
    return this.form.controls[control].hasError(error);
  }
  onCheckboxChange(e) {
    const checkArray: FormArray = this.secondFormGroup.get('checkArray') as FormArray;
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

  change(event) {
    if (event.source.value === 'Yes') {
      console.log(this.certification.certiform.value);
    }
  }

  submitForm() {
    this.submitted = true;
    if (this.firstFormGroup.invalid) {
      return;
    }
    console.log('Name:', this.form.value);
    console.log('Address:', this.firstFormGroup.value);


  }

  submit(event) {

    console.log('selectcertification:', this.selectcertification.controls.select.value);
    console.log('certificationsArray:', this.secondFormGroup.controls.checkArray.value);
    console.log('CertificationNo:', this.certificationform.controls.certification.value);
    console.log('other certification no:', this.certification.certiform.controls.checkArray.value);
    console.log('CGNurseCertificationNo:', this.certification.CGcertificationform.controls.CGNurseCertificationNo.value);
    console.log('HealthcareAttendanNo:', this.certification.HealthcareAttendanNoform.controls.HealthcareAttendanNo.value);

    // console.log( this.certification.certiform.value );
    console.log('language:', this.language.languageGroup.controls.checkArray.value);

  }
  formThird(event) {
  }
  SubmitformThird(neighbour) {
    console.log('home_travel:', this.caregiver.registerForm.controls.home_travel.value);
    console.log('Rate_Unit:', this.caregiver.registerForm.controls.food.value);
    console.log('home_serve:', this.caregiver.registerForm.controls.home_serve.value);
    console.log('rate:', this.caregiver.registerForm.controls.rate.value);
    console.log('notificationTypeFC:', this.caregiver.registerForm.controls.notificationTypeFC.value);
    console.log('notificationTypeFCF:', this.caregiver.registerForm.controls.notificationTypeFCF.value);
    console.log('notificationTypeFCA:', this.caregiver.registerForm.controls.notificationTypeFCA.value);
    console.log('Short_Bio:', this.caregiver.registerForm.controls.Short_Bio.value);

    // console.log(this.specie.specailform.value);
    // console.log('this is child data:', neighbour);
    // console.log(this.caregiver.registerForm.value);
    // console.log(this.block.Blockform.status);

  }
}
