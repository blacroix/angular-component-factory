import { Component } from '@angular/core';
import { DynamicComponent, DynamicComponentData } from '../types';

@Component({
  selector: 'app-a',
  template: `<h2>Dynamic Component A, I am of type {{data.type}}</h2>`
})
export class AComponent implements DynamicComponent {

  data: DynamicComponentData;

}
