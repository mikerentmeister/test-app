import { Component, ViewChild } from '@angular/core';
import { CommonComponent } from 'ngx-shared-lib';

@Component({
  selector: 'app-root',
  template: `
<exp-common></exp-common>
  `,
  styles: []
})
export class AppComponent {
  @ViewChild(CommonComponent) public common: CommonComponent;
  title = 'test-app';
}
