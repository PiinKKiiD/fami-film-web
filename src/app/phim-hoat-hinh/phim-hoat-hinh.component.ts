import { Component, OnInit } from '@angular/core';
import {FilmModel} from "../share/film.model";
import {Subscription} from "rxjs";
import {FilmService} from "../share/film.service";
import {DataStorageService} from "../share/data-storage.service";

@Component({
  selector: 'app-phim-hoat-hinh',
  templateUrl: './phim-hoat-hinh.component.html',
  styleUrls: ['./phim-hoat-hinh.component.css']
})
export class PhimHoatHinhComponent implements OnInit {
  phimhoathinhs : FilmModel[] = [];
  phimhots : FilmModel[] = [];
  subscription: Subscription;
  constructor(private filmService : FilmService,
              private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
    this.phimhoathinhs = this.filmService.getFilms('phimhoathinhs');
    this.phimhots = this.filmService.getFilmHots('phimhoathinhs');
    if(this.phimhoathinhs.length == 0) {
      this.dataStorageService.fetchFilm('phimhoathinhs').subscribe();
      this.subscription = this.filmService.filmsChanged
        .subscribe(
          (films: FilmModel[]) => {
            this.phimhoathinhs = films
          }
        );
    }

  }

  onGetFilmHots(){
    if( this.phimhots.length == 0)
      return this.phimhots =this.filmService.getFilmHots('phimhoathinhs');
    else
      return this.phimhots;
  }

}
