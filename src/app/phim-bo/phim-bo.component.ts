import { Component, OnInit } from '@angular/core';
import {FilmModel} from "../share/film.model";
import {Subscription} from "rxjs";
import {FilmService} from "../share/film.service";
import {DataStorageService} from "../share/data-storage.service";

@Component({
  selector: 'app-phim-bo',
  templateUrl: './phim-bo.component.html',
  styleUrls: ['./phim-bo.component.css']
})
export class PhimBoComponent implements OnInit {

  phimbos : FilmModel[] = [];
  phimhots : FilmModel[] = [];
  subscription: Subscription;
  constructor(private filmService : FilmService,
              private dataStorageService: DataStorageService) { }

  ngOnInit(): void {

    this.phimbos = this.filmService.getFilms('phimbos');
    this.phimhots = this.filmService.getFilmHots('phimbos');
    if(this.phimbos.length ==0) {
      this.dataStorageService.fetchFilm('phimbos').subscribe();
      this.subscription = this.filmService.filmsChanged
        .subscribe(
          (films: FilmModel[]) => {
            this.phimbos = films
          }
        );
    }
  }

  onGetFilmHots(){
    if( this.phimhots.length == 0)
      return this.phimhots =this.filmService.getFilmHots('phimbos');
    else
      return this.phimhots;
  }
}
