import { Component, OnInit } from '@angular/core';

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

  ngOnInit(): void {
  }

}
