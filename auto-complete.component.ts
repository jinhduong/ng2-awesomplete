import { AwesompleteOptions } from './awesome.options';
import { Component, OnInit, ElementRef, Input, Renderer2, ViewChild, forwardRef } from '@angular/core';
import { AwesompleteItem } from './model';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import './lib/awesomplete/awesomplete.js';
require('style-loader!./lib/awesomplete/awesomplete.css');

declare var Awesomplete: any;

export const AUTOCOMPLETE_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => AwesompleteComponent),
  multi: true,
};

@Component({
  selector: 'ng2-awesomplete',
  templateUrl: './auto-complete.component.html',
  providers: [AUTOCOMPLETE_VALUE_ACCESSOR],
  styleUrls: ['./auto-complete.component.less']
})
export class AwesompleteComponent implements OnInit, ControlValueAccessor {
  @ViewChild('input') input;
  onChange;
  onTouched;
  private _$elem;
  private _$renderedElem;

  private _list: AwesompleteItem[] | string[] | [string, string] = [];
  @Input() set list(value: AwesompleteItem[] | string[] | [string, string]) {
    if (this._$renderedElem) {
      this._$renderedElem.list = value;
    }
  }
  get list(): AwesompleteItem[] | string[] | [string, string] {
    return this._list;
  }

  private _options: AwesompleteOptions = {
    list: this.list
  };
  @Input() set options(value: AwesompleteOptions) {
    this._options = Object.assign(value, { list: this.list });
  }
  get options(): AwesompleteOptions {
    return this._options;
  }

  constructor(
    private elemRef: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {

    if (this.list && this.list.length > 0) {
      this.options.list = this.list;
    }

    this._$elem = this.elemRef.nativeElement.querySelectorAll('input')[0];
    this.render(this._$elem, this.list);
  }

  render($elem: any, list: AwesompleteItem[] | string[]) {
    this._$renderedElem = new Awesomplete($elem, this.options);
  }

  writeValue(obj: any): void {
    if (this._$elem) {
      this.renderer.setProperty(this._$elem, 'value', obj);
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.renderer.setAttribute(this._$elem, 'disabled', isDisabled ? 'true' : 'false');
  }
  change($event) {
    this.onChange($event.target.value);
    this.onTouched($event.target.value);
  }
}
