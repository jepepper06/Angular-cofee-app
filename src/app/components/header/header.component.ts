import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  showSideBar: boolean = false;

  toggleShowSideBar():void {
    this.showSideBar = !this.showSideBar;
  }

  prevScrollpos: number = window.pageYOffset;

  show: boolean = false;

  HideOnScroll() {

  var currentScrollPos = window.scrollY;
  if (this.prevScrollpos > currentScrollPos) {
    this.show = true;
  } else {
    this.show = false;
  }
  this.prevScrollpos = currentScrollPos;
  }

  ngOnChanges(): void{

  }
  ngOnInit(): void {
  }

}
