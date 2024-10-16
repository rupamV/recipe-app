import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlightCuisine]',
  standalone: true  // Mark the directive as standalone
})
export class HighlightCuisineDirective implements OnInit {
  @Input()
  appHighlightCuisine!: string;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.highlightRecipe();
  }

  highlightRecipe() {
    let color: string;

    switch (this.appHighlightCuisine.toLowerCase()) {
      case 'italian':
        color = 'lightgreen';
        break;
      case 'mexican':
        color = 'lightcoral';
        break;
      case 'indian':
        color = 'yellow';
        break;
      default:
        color = 'lightgray';
    }

    this.el.nativeElement.style.backgroundColor = color;
  }
}
