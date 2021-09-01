import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { GeneralDataService } from 'app/general-data.service';

export interface ISelectOption {
  value: string | boolean | number;
  description: string;
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
})
export class SelectComponent implements ControlValueAccessor {
  select = new FormControl('');

  @Input() options: ISelectOption[];
  @Input() translateSelector: string;

  onTouch: (any) => void;

  constructor(private generalDataService: GeneralDataService) { }

  writeValue(value: any): void {
    value && this.select.setValue(value);
  }

  registerOnChange(fn: any): void {
    this.select.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.select.disable() : this.select.enable();
  }

  changeEvent(value: string) {
    this.select.setValue(value);
    this.onTouch(value);
  }

  translateEntry(value: string, prefix?: string): string {
    return this.generalDataService.translateEntry(value, prefix);
  }
}
