import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'myprefix-root',
  template: `
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
<p>below is font awesome icon:</p>
<i class="fa fa-search"></i> 
  `,
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  title = 'angular-prefix';;
}
