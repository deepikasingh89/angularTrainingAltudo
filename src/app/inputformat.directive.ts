import { Directive,ElementRef,HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appInputformat]',
})
export class InputformatDirective {
  @Input() color:any;
  constructor(private ele: ElementRef) {
    ele.nativeElement.style.color = 'red';
  }

  @HostListener('mouseenter') onMouseenter() {
    console.log('insideMouseenter');
     this.ele.nativeElement.style.color=this.color;
  }

  @HostListener('mouseleave') onMouseleave() {
    console.log('inside onMouseleave');
     this.ele.nativeElement.style.color='blue';
  }
}
