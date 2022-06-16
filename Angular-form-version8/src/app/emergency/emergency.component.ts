import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-emergency',
  templateUrl: './emergency.component.html',
  styleUrls: ['./emergency.component.css']
})
export class EmergencyComponent implements OnInit {
  @Input() secondFormGroup: FormGroup;
  block: string;
  EmergnecyGroup: FormGroup;
  constructor() {
    this.EmergnecyGroup = new FormGroup({
      phone6: new FormControl(),
      phone5: new FormControl(),
      phone4: new FormControl(),
      phone3: new FormControl(),
      phone2: new FormControl(),
      phone1: new FormControl(),
      family_member1: new FormControl(),
      family_member2: new FormControl(),
      friend1: new FormControl(),
      friend2: new FormControl(),
      pharmacy: new FormControl(),
      doctor: new FormControl(),
    });
  }
  submitted = false;
  data(block) {
    console.log(block);
  }
  ngOnInit() {}
  onSubmit() {
    this.submitted = true;
    if (this.EmergnecyGroup.invalid) {
      return;
    }
    console.log(this.EmergnecyGroup.value);
  }
}
