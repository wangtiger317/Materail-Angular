import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import {block} from '../caregiver/caregiver.component';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-block-card',
  templateUrl: './block-card.component.html',
  styleUrls: ['./block-card.component.css']
})
export class BlockCardComponent implements OnInit {
  @Input() blockData: block;
  @Output() neighbourUpdated = new EventEmitter();
  Blockform: FormGroup;
  submitted: boolean;
  neighbour: string;
  neighbourhood = new FormControl('', Validators.required);

  // tslint:disable-next-line:variable-name
  constructor(private _formBuilder: FormBuilder) {}
 changeInput() {
   this.neighbourUpdated.emit(this.Blockform.value);
   // console.log(this.Blockform.value);
 }
  ngOnInit() {
    this.Blockform = this._formBuilder.group({
      neighbourhood: ['', Validators.required],
    });
  }

  submitForm() {
    this.submitted = true;
    if (this.Blockform.invalid) {
      return;
    }
  }
}
