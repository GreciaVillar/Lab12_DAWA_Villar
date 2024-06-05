import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

interface Travel {
  image: string;
  title: string;
  description: string;
  price: number;
}

@Component({
  selector: 'app-travels',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.css']
})
export class TravelsComponent {
  travels: Travel[] = [
    {
      image: 'https://vmviajar.com/img/src/viajes-huatulco-todo-incluido.jpg',
      title: 'Viaje a la playa',
      description: 'Disfruta de las mejores playas con todo incluido.',
      price: 500
    },
    {
      image: 'https://content.cuerpomente.com/medio/2023/03/03/montanismo_4397a7e5_1280x720.jpg',
      title: 'Aventura en la montaña',
      description: 'Explora las montañas y disfruta de actividades al aire libre.',
      price: 700
    },
    {
      image: 'https://www.cuscotoursperu.com/wp-content/uploads/tours-cultural-a-cusco-gal.jpg',
      title: 'Tour cultural',
      description: 'Descubre la historia y cultura de destinos fascinantes.',
      price: 600
    },
    {
      image: 'https://travelwise.com.do/blog/wp-content/uploads/2017/06/Safari-725x358.jpg',
      title: 'Safari en África',
      description: 'Vive la emoción de un safari en África y observa la vida salvaje en su hábitat natural.',
      price: 1500
    },
    {
      image: 'https://www.dedinero.com.mx/resizer/47Z2pGGvmESLCjXy9SY-byLLtzM=/1100x666/cloudfront-us-east-1.images.arcpublishing.com/eluniversal/AXH75JVO3FHFHBLR3YCE2WXTR4.jpg',
      title: 'Crucero por el Caribe',
      description: 'Relájate en un lujoso crucero y visita las islas más hermosas del Caribe.',
      price: 2000
    },
    {
      image: 'https://guiajando.b-cdn.net/wp-content/uploads/2023/11/escapada-budapest-hungria-1024x683.jpg',
      title: 'Escapada a la ciudad',
      description: 'Explora las principales ciudades del mundo y disfruta de su vida nocturna y atracciones turísticas.',
      price: 800
    },
    {
      image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/10/03/d6/72.jpg',
      title: 'Aventura en el desierto',
      description: 'Experimenta la belleza del desierto y sus dunas infinitas en un viaje lleno de adrenalina.',
      price: 900
    },
    {
      image: 'https://cosasbucket.s3.amazonaws.com/wp-content/uploads/2019/01/24153837/islas-privadas-.jpg',
      title: 'Retiro en una isla privada',
      description: 'Disfruta de la exclusividad y privacidad en una isla solo para ti.',
      price: 3000
    },
  ];

  viewDetails(travel: Travel) {
    console.log('Ver detalles de:', travel);
  }
}