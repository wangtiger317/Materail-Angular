import {Component, ElementRef, HostListener, Input} from '@angular/core';
import {ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: FileUploadComponent,
      multi: true
    }
  ]
})
export class FileUploadComponent implements ControlValueAccessor {
  @Input() secondFormGroup: FormGroup;
  // tslint:disable-next-line:ban-types
  onChange: Function;
  private file: File | null = null;

  @HostListener('change', ['$event.target.files']) emitFiles( event: FileList ) {
    this.file = event && event.item(0);
  }

  constructor( private host: ElementRef<HTMLInputElement> ) {
  }

  // tslint:disable-next-line:ban-types
  registerOnChange(fn: Function) {
    this.onChange = fn;

  }

  // tslint:disable-next-line:ban-types
  registerOnTouched(fn: Function) {
  }

  writeValue(value: null ): void {
    this.host.nativeElement.value = '';
    this.file = null;
  }
}
