import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  text: string = `We are a brand committed with our client,
   with give them the best experience in coffe. We know how
    important coffee could for our incredible and working clients`

  ngOnInit(): void {
  }

}
