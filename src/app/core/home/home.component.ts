import { Component } from '@angular/core';
import { movieService } from 'src/app/shared/service/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  searchTerm: string = '';
  movies: any[] = [];
  isLoading: boolean = false;
  error: string = '';

  constructor(private movieService: movieService) {}
  onSearch() {
    if (!this.searchTerm) {
      return;
    }

    this.isLoading = true;
    this.movieService.searchMovies(this.searchTerm).subscribe({
      next: (data) => {
        this.movies = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = err.message;
        this.isLoading = false;
      },
    });
  }

  onReset() {
    this.searchTerm = '';
    this.movies = [];
    this.error = '';
  }
}
