import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  // PROPERTIES
  @Input() text: string = `Lorem ipsum dolor sit amet, consectetur
  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
  exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat. Duis aute irure dolor in reprehenderit in voluptate velit
  esse cillum dolore eu fugiat nulla pariatur.`;

  @Input() title?: string = 'Some Title';

  @Input() img: string = '../../assets/images/cafe2.jpg';

  selector = () => {
    ;
    if(this.title == 'Desde el grano'){
      return 'grano';
    }
    if(this.title == 'El Café Verde'){
      return 'verde';
    }
    if(this.title == 'El Tostado'){
      return 'tostado';
    }
    if(this.title == 'La Molienda'){
      return 'molienda';
    }
    if(this.title == 'La Taza'){
      return 'taza';
    }if(this.title == undefined ){
      return
    }
    return
  }

  ngOnInit(): void {
  }

}
