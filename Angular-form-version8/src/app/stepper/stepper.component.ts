import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {FormBuilder, ControlValueAccessor, FormControl, FormGroup, Validators} from '@angular/forms';
import {BlockCardComponent} from '../block-card/block-card.component';
import {BlockData} from '../block-card/block-data';
import {log} from 'util';

// tslint:disable-next-line:class-name
export interface block {
  blockNumber: number;
}
@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
})
export class StepperComponent implements OnInit, AfterViewInit {
  blocks: BlockData[];
  // @ts-ignore
  @ViewChild(BlockCardComponent) block;
  // @ts-ignore
  @ViewChild('fred') fred;
  appParentMessage: string;
  isLinear = false;
  submitted = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  messageFromChild: string;
  // tslint:disable-next-line:variable-name
  block_card: string;
  // parentMessage = 'Parent Says Hello!!!!';
  // tslint:disable-next-line:variable-name
  constructor(private _formBuilder: FormBuilder , private cd: ChangeDetectorRef, el: ElementRef) {}
  form: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
  });
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      // firstName: [null, [Validators.required]],
      // lastName: [null, [Validators.required]],
      phone: ['', [Validators.required,  Validators.minLength(6)]],

    });
    this.secondFormGroup = this._formBuilder.group({
    });
    // tslint:disable-next-line:no-unused-expression label-position
    this.blocks = [];
  }
  addCard() {
    // @ts-ignore
    this.blocks.push({
      blockNumber: this.blocks.length + 1,
    });
  }
  public errorHandling1 = (control: string, error: string) => {
    return this.form.controls[control].hasError(error);
  }
  public errorHandling = (control: string, error: string) => {
    return this.firstFormGroup.controls[control].hasError(error);
  }
  showMessageFromChild(message: any) {
    this.messageFromChild = message;
  }
  submitForm() {
    this.submitted = true;
    if (this.firstFormGroup.invalid) {
      return;
    }
    // console.log('Name:', this.firstFormGroup.value);
    console.log('Name:', this.form.value);
    console.log('phone:', this.firstFormGroup.controls.phone.value);
  }
  // tslint:disable-next-line:variable-name
  update(block_card) {
    console.log('this is block data:' , block_card);

  }
  // tslint:disable-next-line:variable-name
  submit() {
    this.submitted = true;
    if (this.secondFormGroup.invalid) {
      return;
    }
    // console.log('this is block :' , this.block.BlockFormGroup.validator);
    // tslint:disable-next-line:no-unused-expression
    console.log('Name:', this.block.form.value);
    console.log('email:', this.block.BlockFormGroup.value);
    console.log('limitationcheckarry:', this.block.limitation.CheckBoxFormGroup.value);
    console.log('limitation:', this.block.limitation.form.value);
    console.log('Temperament:', this.block.Routine.RFormGroup.controls.textarea.value);
    console.log('Notes / Special requests:', this.block.Routine.RFormGroup.controls.textarea1.value);
    console.log('Emergency:', this.block.Emergency.EmergnecyGroup.value);
  }

  ngAfterViewInit(): void {
  }

}
