import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

interface BlogPost {
  id: number;
  image: string;
  title: string;
  description: string;
  date: string;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  blogPosts: BlogPost[] = [
    {
      id: 1,
      image: 'https://img.europapress.es/fotoweb/fotonoticia_20140627100504_1200.jpg',
      title: 'Descubre los secretos de las playas más exóticas',
      description: 'Explora las playas más exóticas del mundo y descubre sus secretos mejor guardados.',
      date: '2024-01-10'
    },
    {
      id: 2,
      image: 'https://www.manasluadventures.com/wp-content/uploads/2019/07/WhatsApp-Image-2019-07-03-at-15.02.46.jpeg',
      title: 'Aventuras en la montaña: Consejos y recomendaciones',
      description: 'Todo lo que necesitas saber para una aventura exitosa en la montaña.',
      date: '2024-01-05'
    },

  ];

  constructor(private router: Router) {}

  viewDetails(post: BlogPost) {
    this.router.navigate(['/blog', post.id]);
  }
}
