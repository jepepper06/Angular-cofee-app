import { Component, OnInit } from '@angular/core';
import { ICard } from 'src/app/models/Card.model';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {
  constructor() {}

  cards: ICard[] = [
    {
      img: '../../assets/images/cafe5.jpg',
      paragraph: 'Nos encaragamos de que nuestro café sea cultivado con los más finos estandares, no hacemos uso de agroquímicos en el proceso. Nuestro norte siempre ha sido el compromiso de llevar al mercado un producto 100% orgánico.',
      title:'Desde el grano'
    },
    {
      img: '../../assets/images/cafe2.jpg',
      paragraph:
        'Luego de ser despulpado, nuestro café pasa por una fase de pre-selección antes del tostado. Los granos que no cumplen con las condiciones ideales, de tamaño y forma son desechados en esta parte del proceso, para así poder lograr el mejor de los resultados en el tostado.',
      title:'El Café Verde'
    },
    {
      img: '../../assets/images/cafe1.jpg',
      paragraph:'Esta es la parte más crucial del proceso, tenemos un personal capacitado en la cata de nuestros lotes de café. Estos analizan el aroma, color, y sabor del grano de manera exhaustiva, para darle al cliente la mejor taza de café en su mesa. ',
      title:'El Tostado'
    },
    {
      img:'../../assets/images/cafe3.jpg',
      paragraph:'Nuestro café tiene dos presentaciones principales, molido y en grano. En la fase de molido, cuidamos que el cuarto de molido este lo mejor aislado posible, para que así el café en polvo no se contamine con olores no deseados y poder dar al cliente la mejor experiencia cafecera.',
      title:'La Molienda'
    },
    {
      img:'../../assets/images/cafe6.jpg',
      paragraph:'Contamos con una serie de cafeterías distribuidas en las ciudades mas importantes del país, para poder darles a los amantes del café una experiencia completa, con la mejor atención, y la mejor calidad en café.',
      title:'La Taza'
    }
  ];
  ngOnInit(): void {}
}
