import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  // PROPERTIES
  @Input() text: string = '';

  @Input() title: string = '';

  @Input() img: string = '../../assets/images/cafe1.jpg';

  ngOnInit(): void {
  }

}
