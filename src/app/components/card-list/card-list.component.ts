import { Component, OnInit } from '@angular/core';
import { ICard } from 'src/app/models/Card.model';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  constructor() { }

  cardsContent: ICard[] = [

  ];
  ngOnInit(): void {
  }

}
