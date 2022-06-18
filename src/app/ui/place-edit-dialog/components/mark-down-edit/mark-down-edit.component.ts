import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import  snarkdown from "snarkdown";



@Component({
  selector: 'mn-mark-down-edit',
  templateUrl: './mark-down-edit.component.html',
  styleUrls: ['./mark-down-edit.component.scss']
})
export class MarkDownEditComponent implements OnInit,ControlValueAccessor {
  public isDisabled: boolean = false;
  public selectedTabName: "CONTENT" | "RESULT" = "CONTENT";
  public editedValue: string;

  constructor(private domSanitizer: DomSanitizer) { }

  onClickTabName(selectedTabName:"CONTENT" | "RESULT"): void{
    this.selectedTabName = selectedTabName;
  }

  mkAsHtml(mkEdit: string){
    return this.domSanitizer.bypassSecurityTrustHtml(snarkdown(mkEdit));
  }


  writeValue(mkEdit: string): void {
    this.editedValue = mkEdit;
  }
  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
  ngOnInit(): void {
  }
}
