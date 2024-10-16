import { HighlightCuisineDirective } from './highlight-cuisine.directive';

describe('HighlightCuisineDirective', () => {
  it('should create an instance', () => {
    const elRefMock = jasmine.createSpyObj('ElementRef', ['nativeElement']);
    const directive = new HighlightCuisineDirective(elRefMock);
    expect(directive).toBeTruthy();
  });
});
