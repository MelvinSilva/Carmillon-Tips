import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appTruncateText]',
})
export class TruncateTextDirective implements OnInit {
  @Input() maxLength: number = 20;
  @Input() fontSize: string = 'inherit';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const text = this.el.nativeElement.textContent;
    if (text.length > this.maxLength) {
      this.renderer.setStyle(this.el.nativeElement, 'fontSize', this.fontSize);
    }
  }
}
