import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDate]'
})
export class DateDirective {


  @Input()
  private date: string;
  private paragrph;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.paragrph = this.renderer.createElement('p');
  }

  @HostListener('mouseenter')
  mouseenter(eventDate: Event) {
    this.paragrph.innerHTML = this.date;
    this.renderer.appendChild(this.el.nativeElement, this.paragrph);
  }

  @HostListener('mouseleave')
  mouseleave(eventDate: Event) {
   /* this.paragrph.innerHTML = this.date.toLocaleDateString();*/
    this.renderer.removeChild(this.el.nativeElement, this.paragrph);
  }

}
