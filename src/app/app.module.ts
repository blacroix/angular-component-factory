import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AnchorFactoryDirective } from './anchor-factory.directive';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';

@NgModule({
  declarations: [
    AppComponent,
    AnchorFactoryDirective,
    AComponent,
    BComponent,
  ],
  imports: [
    BrowserModule,
  ],
  bootstrap: [
    AppComponent,
  ],
  entryComponents: [
    AComponent,
    BComponent,
  ]
})
export class AppModule { }
