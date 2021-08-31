import {Injectable } from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {FilmModel} from './film.model'
import {exhaustMap, map, take, tap} from 'rxjs/operators';
import {AuthService} from "../auth/auth.service";
import {FilmService} from "./film.service";
@Injectable({
  providedIn:'root'
})
export class DataStorageService{
  private firebaseStoragePath = 'https://fami-film-default-rtdb.asia-southeast1.firebasedatabase.app/';

  constructor(private http: HttpClient,
              private filmService: FilmService,
              private authService: AuthService) {
  }

  fetchFilm(filmType: string){
    return this.http.get<FilmModel[]>(
      this.firebaseStoragePath+filmType+'.json',
    )
      .pipe(
        map(films =>{
          return films.map(film => {
            return {
              ...film,
            };
          });
        }),
        tap(films=>{
          this.filmService.setFilms(films, filmType);
        })
      );
  }
}
