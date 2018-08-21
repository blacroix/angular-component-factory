import { Component, ComponentFactory, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { AnchorFactoryDirective } from './anchor-factory.directive';
import { AComponent } from './a/a.component';
import { DynamicComponent, DynamicComponentData } from './types';
import { BComponent } from './b/b.component';

@Component({
  selector: 'app-root',
  template: `
    <h1>Welcome!</h1>
    <ng-template anchor-factory></ng-template>
  `,
})
export class AppComponent implements OnInit {

  @ViewChild(AnchorFactoryDirective) anchorFactory: AnchorFactoryDirective;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
  ) {
  }

  ngOnInit(): void {
    // Get data from CMS
    const dynamicComponentsData: DynamicComponentData[] = [
      {type: 'componentA'},
      {type: 'componentB'},
    ];
    let factory: ComponentFactory<DynamicComponent> = null;
    for (const data of dynamicComponentsData) {
      switch (data.type) {
        case 'componentA':
          factory = this.componentFactoryResolver.resolveComponentFactory(AComponent);
          break;
        case 'componentB':
          factory = this.componentFactoryResolver.resolveComponentFactory(BComponent);
          break;
        default:
          break;
      }
      if (factory) {
        const component = this.anchorFactory.viewContainerRef.createComponent(factory).instance as DynamicComponent;
        component.data = data;
      }
    }
  }

}
