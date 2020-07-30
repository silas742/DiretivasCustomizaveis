import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCorComponente]'
})
export class CorComponenteDirective {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }
  @Input('appCorComponente') corComponente: string;
  @HostListener('click') onMouseClick(){
    this.mudaComponente(this.corComponente || "#A52A2A");
  }
  private mudaComponente (color : string){
    this.elementRef.nativeElement.style.backgroundColor = color;
  }
}
