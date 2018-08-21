import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[anchor-factory]'
})
export class AnchorFactoryDirective {

  constructor(
    public viewContainerRef: ViewContainerRef,
  ) {
  }

}
