import { Component } from '@angular/core';
import { DynamicComponent, DynamicComponentData } from '../types';

@Component({
  selector: 'app-b',
  template: `<h2>Dynamic Component B, I am of type {{data.type}}</h2>`
})
export class BComponent implements DynamicComponent {

  data: DynamicComponentData;

}
