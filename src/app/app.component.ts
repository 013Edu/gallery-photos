import { photo } from './components/photos/photos.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Galeria de Fotos';
  filter: string = ''
  photos: photo[] = []

  ngOnInit(): void {
    this.photos = [
      {
        id: 1,
        title: 'Animal cachorro',
        url: '../../../assets/Animal cachorro.jpg',
        likes: 0,
        comments: 0
      },
      {
        id: 2,
        title: 'Animal cavalo',
        url: '../../../assets/Animal cavalo.jpg',
        likes: 0,
        comments: 0
      },
      {
        id: 15,
        title: 'Neve',
        url: '../../../assets/Neve.jpg',
        likes: 0,
        comments: 0
      },
      {
        id: 3,
        title: 'Animal coruja',
        url: '../../../assets/Animal coruja.jpg',
        likes: 0,
        comments: 0
      },
      {
        id: 4,
        title: 'Animal passaro',
        url: '../../../assets/Animal passaro.jpg',
        likes: 0,
        comments: 0
      },
      {
        id: 5,
        title: 'Amigos',
        url: '../../../assets/Amigos.jpg',
        likes: 0,
        comments: 0
      },
      {
        id: 6,
        title: 'Carro de corrida',
        url: '../../../assets/Carro de corrida.jpg',
        likes: 0,
        comments: 0
      },
      {
        id: 7,
        title: 'Carro',
        url: '../../../assets/Carro.jpg',
        likes: 0,
        comments: 0
      },
      {
        id: 10,
        title: 'Praia',
        url: '../../../assets/Praia.jpg',
        likes: 0,
        comments: 0
      },
      {
        id: 11,
        title: 'Paisagem com neve',
        url: '../../../assets/Paisagem com neve.jpg',
        likes: 0,
        comments: 0
      },
      {
        id: 12,
        title: 'Natal',
        url: '../../../assets/Natal.jpg',
        likes: 0,
        comments: 0
      },
      {
        id: 13,
        title: 'Relogio',
        url: '../../../assets/Relogio.jpg',
        likes: 0,
        comments: 0
      },
      {
        id: 14,
        title: 'Amigos em reunião',
        url: '../../../assets/Amigos em reunião.jpg',
        likes: 0,
        comments: 0
      },
      {
        id: 1,
        title: 'Animal exótico',
        url: '../../../assets/Animal exótico.jpg',
        likes: 0,
        comments: 0
      },
      {
        id: 9,
        title: 'Fim de tarde na praia',
        url: '../../../assets/Fim de tarde na praia.jpg',
        likes: 0,
        comments: 0
      },
      {
        id: 8,
        title: 'Estrada',
        url: '../../../assets/Estrada.jpg',
        likes: 0,
        comments: 0
      },
    ]
  }
}
