import {Component, Input, OnInit, Output, ViewChild, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators, NgForm, FormControl} from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {BlockData} from '../block-card/block-data';
import {requiredFileType} from '../requiredFileType';
import {BlockCardComponent} from '../block-card/block-card.component';
export interface Unit {
  value: string;
  viewValue: string;
}
// tslint:disable-next-line:class-name
export interface block {
  blockNumber: number;
}
@Component({
  selector: 'app-caregiver',
  templateUrl: './caregiver.component.html',
  styleUrls: ['./caregiver.component.css']
})
export class CaregiverComponent implements OnInit {
  blocks: BlockData[];
  radioOptions = 'No';
  // @ts-ignore
  @ViewChild(BlockCardComponent) data;
  @Output() neighbourUpdated = new EventEmitter();
  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      options: ['Yes']
    });
  }
  // @Input() secondFormGroup: FormGroup;
  // tslint:disable-next-line:ban-types
  required: Boolean;
  isSubmitted = false;
  values = '';
  notificationTypeFC = new FormControl('', Validators.required);
  notificationTypeFCF = new FormControl('', Validators.required);

  registerForm: FormGroup;
  submitted = true;
  type: any;
  selected: [''];
  selectedValue: string;
  public ProductId: string;
  neighbour: string;

  Unit: Unit[] = [
    {value: '', viewValue: ''},
    {value: 'km', viewValue: 'km'},
    {value: 'Miles', viewValue: 'Miles'},
  ];
  private string: any;

  ngOnInit(): void {
    // @ts-ignore
    this.registerForm = this.formBuilder.group({
      home_serve: ['', Validators.required],
      rate: ['', Validators.required],
      Short_Bio: ['', Validators.required],
      home_travel: ['', Validators.required],
      food: [],
      notificationTypeFC: ['', Validators.required],
      notificationTypeFCF: ['', Validators.required],
      notificationTypeFCA: ['', Validators.required],
    });
    this.blocks = [];
    // tslint:disable-next-line:no-unused-expression
  }
  addCard() {
    this.blocks.push({
      blockNumber: this.blocks.length + 1,
    });
  }
  onKey(event: any) { // without type info
    this.values = event.target.value;
     }
  public errorHandling = (control: string, error: string) => {
    return this.registerForm.controls[control].hasError(error);
  }
  changeComboo(event) {
    // this.neighbourUpdated.emit(this.data.controls.neighbourhood.value);
  }
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    // console.log(this.registerForm.value);
    // this.neighbourUpdated.emit(this.data.Blockform.value);
     }
  // Handle change
  handleNeigbourUpdated(neighbour) {
    console.log('neighbourhood value:', neighbour);
  }

}
