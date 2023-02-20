import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{showName}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() showName: any;

}
