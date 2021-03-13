import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[hoverClass]',
})
export class HoverClassDirective {
  @Input() hoverClass: string = 'hover';

  constructor(private elementRef: ElementRef<HTMLElement>) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.elementRef.nativeElement.classList.add(this.hoverClass);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.elementRef.nativeElement.classList.remove(this.hoverClass);
  }
}
