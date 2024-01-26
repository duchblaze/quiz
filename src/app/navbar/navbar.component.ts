import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  navBg: any;
  isScrolled: boolean = false;
  menuIcon: any;

  @HostListener('document:scroll') scrollover() {
    console.log(document.body.scrollTop, 'scrolllength#')

    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.isScrolled = true;
      this.menuIcon.classList.add('primary');
      this.navBg = {
        // 'background-color': '#000000',
        'color': 'white',
        'letter-spacing': '1px'
      }
    }
    else {
      this.isScrolled = false;
      this.navBg = {
        // 'background-color': '#F8F9FA',
        // 'color': 'black'
      }
    }
  }

}
