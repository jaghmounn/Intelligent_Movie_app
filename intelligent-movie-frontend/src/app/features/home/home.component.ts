import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DxDataGridModule } from 'devextreme-angular';
import { LatestNewsComponent  } from './latest-news/latest-news.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, DxDataGridModule,LatestNewsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

  export class HomeComponent {


  featuredMovies = [
    {
      title: 'Dune: Part Two',
      description: 'Paul Atreides unites with the Fremen to seek revenge against the conspirators.',
      poster: 'https://image.tmdb.org/t/p/w500/8uVKfOJUhmybNsVh089EqLHUYEG.jpg'
    },
    {
      title: 'Oppenheimer',
      description: 'The story of American scientist J. Robert Oppenheimer and the atomic bomb.',
      poster: 'https://image.tmdb.org/t/p/w500/ptpr0kGAckfQkJeJIt8st5dglvd.jpg'
    },
    {
      title: 'The Batman',
      description: 'Batman ventures into Gotham City’s underworld when a killer leaves clues.',
      poster: 'https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg'
    },
    {
      title: 'Fallout',
      description: 'Une terrible catastrophe nucléaire contraint les survivants "privilégiés" à se réfugier dans des Vaults',
      poster: 'https://image.tmdb.org/t/p/w600_and_h900_face/c15BtJxCXMrISLVmysdsnZUPQft.jpg'
    },
    {
      title: 'Le chemin de la vengeance',
      description: '1946. Aatami Korpi retourne là où sa famille a été massacrée pendant la guerre. Il y démonte la maison familiale et la charge sur un camion',
      poster: 'https://image.tmdb.org/t/p/w600_and_h900_face/5zShXWMi5f4Cb883DnQbrpPZYIN.jpg'
    }
  ];

}


