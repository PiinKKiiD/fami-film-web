import { Component, OnInit } from '@angular/core';
import {FilmModel} from "../share/film.model";
import {range, Subscription} from "rxjs";
import {FilmService} from "../share/film.service";
import {DataStorageService} from "../share/data-storage.service";

@Component({
  selector: 'app-phim-le',
  templateUrl: './phim-le.component.html',
  styleUrls: ['./phim-le.component.css']
})
export class PhimLeComponent implements OnInit {

  phimles : FilmModel[] = [];
  phimhots : FilmModel[] = [];
  subscription: Subscription;
  constructor(private filmService : FilmService,
              private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
    this.phimles = this.filmService.getFilms('phimles');
    this.phimhots = this.filmService.getFilmHots('phimles');
    if(this.phimles.length == 0) {
      this.dataStorageService.fetchFilm('phimles').subscribe();
      this.subscription = this.filmService.filmsChanged
        .subscribe(
          (films: FilmModel[]) => {
            this.phimles = films
          }
        );
    }

  }
  onGetFilmHots(){
    if( this.phimhots.length == 0)
      return this.phimhots =this.filmService.getFilmHots('phimles');
    else
      return this.phimhots;
  }

}
