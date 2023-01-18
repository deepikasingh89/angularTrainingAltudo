import { Component, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-highlight',
  templateUrl: './highlight.component.html',
  styleUrls: ['./highlight.component.css'],
})
export class HighlightComponent implements OnChanges {
  @Input() searchString: any;
  @Input() searchvalue: any;
  result: any = [];

  ngOnChanges(changes: SimpleChanges): void {
    let regEx = new RegExp('('+this.searchString+')','i');
    this.result = this.searchvalue.split(regEx);
    console.log('this.result ', this.result);
  }
}
