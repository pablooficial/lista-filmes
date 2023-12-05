import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class movieService {
  public api = 'https://api.themoviedb.org/3';
  public apiKey = 'api_key=8baba8ab6b8bbe247645bcae7df63d0d';

  constructor(private _http: HttpClient) {}

  searchMovies(query: string) {
    const apiKey = 'api_key=8baba8ab6b8bbe247645bcae7df63d0d'; // Substitua pelo seu próprio API Key
    const url = `${this.api}/search/movie?${apiKey}&query=${query}`;
    return this._http.get(url).pipe(
      map((response: any) => response.results),
      catchError((error) => {
        throw new Error('Erro na busca de filmes');
      })
    );
  }
}
