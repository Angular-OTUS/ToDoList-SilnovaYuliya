import { Directive, HostListener, input, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appTooltipsItem]',
  standalone: true,
})
export class TooltipsItemDirective {

  constructor(
    private elemRef: ElementRef,
    private renderer: Renderer2,
  ){}

  appTooltipsItem = input<string>();
  tooltipElement = null;

  @HostListener('mouseenter') onMouseEnter() {
    this.tooltipElement = this.renderer.createElement('span');
    this.renderer.appendChild(
      this.tooltipElement,
      this.renderer.createText(this.appTooltipsItem()??'')
    );
    
    // Стили тултипа
    this.renderer.setStyle(this.tooltipElement, 'position', 'absolute');
    this.renderer.setStyle(this.tooltipElement, 'background-color', 'lightblue');
    this.renderer.setStyle(this.tooltipElement, 'color', 'blue');
    this.renderer.setStyle(this.tooltipElement, 'padding', '4px 8px');
    this.renderer.setStyle(this.tooltipElement, 'border-radius', '4px');
    this.renderer.setStyle(this.tooltipElement, 'font-size', '12px');
    this.renderer.setStyle(this.tooltipElement, 'z-index', '1000');
    this.renderer.setStyle(this.tooltipElement, 'white-space', 'nowrap');

    // Добавляем в body, чтобы не влиять на позиционирование
    this.renderer.appendChild(document.body, this.tooltipElement);

    this.positionTooltip();
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.tooltipElement) {
      this.renderer.removeChild(document.body, this.tooltipElement);
      this.tooltipElement = null;
    };
  }
  
  private positionTooltip() {
    if (!this.tooltipElement) return;

    const hostPos = this.elemRef.nativeElement.getBoundingClientRect();
    //const tooltipPos = this.tooltipElement.getBoundingClientRect();

    const top = hostPos.bottom + window.scrollY + 6;
    const left = hostPos.left + window.scrollX + hostPos.width;

    this.renderer.setStyle(this.tooltipElement, 'top', `${top}px`);
    this.renderer.setStyle(this.tooltipElement, 'left', `${left}px`);
  }
}
