import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatRadioButton, MatRadioChange} from '@angular/material';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
    @Input() secondFormGroup: FormGroup;
    // tslint:disable-next-line:no-output-native
    @Output()
    change: EventEmitter<MatRadioChange>;
    @Input()
    name: string;
    radioOptions: string;
    radioOptions1: string;
    radioOptions2: string;
    radioOptions3: string;
    radioOptions4: string;
    radioOptions5: string;
    seasons: string[] = ['1', '2', '3', '4', '5'];
    seasons1: string[] = ['1', '2', '3', '4', '5'];
    seasons2: string[] = ['1', '2', '3', '4', '5'];
    seasons3: string[] = ['1', '2', '3', '4', '5'];
    seasons4: string[] = ['1', '2', '3', '4', '5'];
    seasons5: string[] = ['1', '2', '3', '4', '5'];
    tableGroup: FormGroup;
    private submitted: boolean;

    // tslint:disable-next-line:variable-name
    constructor(private _formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.tableGroup = this._formBuilder.group({
          // five_first: this._formBuilder.array([], [Validators.required]),
            five_first: ['', [Validators.required]],
            five_two: ['', [Validators.required]],
            five_three: ['', [Validators.required]],
            five_four: ['', [Validators.required]],
            five_five: ['', [Validators.required]],
        });
    }
    onChange(mrChange: MatRadioChange) {
        console.log('MatRadioChange:', mrChange.value);
        // const mrButton: MatRadioButton = mrChange.source;
        // console.log(mrButton.name);
    }
    submitForm() {
        this.submitted = true;
        if (this.tableGroup.invalid) {
            return;
        }
        console.log(this.tableGroup.value);
    }
}
