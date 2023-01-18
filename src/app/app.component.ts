import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular_practice';
  hideChild: boolean = true;
  count: number = 1;
  childHide: boolean = true;
  item1 = 'item1dfdfdfdf';
  searchtext = '';
  value = 'Angular abc';
  index = 1;
  toggle() {
    this.hideChild = !this.hideChild;
  }
  

  navbarCollapsed = true;

  toggleNavbarCollapsing() {
    this.navbarCollapsed = !this.navbarCollapsed;
  }
  incrFun() {
    this.count++;
  }
  decrFun() {
    this.count--;
  }

  hdChild() {
    this.childHide = !this.childHide;
  }
}
