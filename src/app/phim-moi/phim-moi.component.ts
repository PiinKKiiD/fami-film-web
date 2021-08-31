import { Component, OnInit } from '@angular/core';
import {FilmModel} from "../share/film.model";
import {range, Subscription} from "rxjs";
import {FilmService} from "../share/film.service";
import {DataStorageService} from "../share/data-storage.service";
@Component({
  selector: 'app-phim-moi',
  templateUrl: './phim-moi.component.html',
  styleUrls: ['./phim-moi.component.css']
})
export class PhimMoiComponent implements OnInit {
  phimmois : FilmModel[] = [];
  phimhots : FilmModel[] = [];
  subscription: Subscription;
  constructor(private filmService : FilmService,
              private dataStorageService: DataStorageService) { }

  ngOnInit(): void {

    this.phimmois =this.filmService.getFilms('phimmois');
    if(this.phimmois.length == 0){
      console.log('fetching...')
      this.dataStorageService.fetchFilm('phimmois').subscribe();
      this.subscription = this.filmService.filmsChanged
        .subscribe(
          (films: FilmModel[] )=>{
            this.phimmois = films;

          }
        );
    }
  }
  onGetFilmHots(){
    if( this.phimhots.length == 0)
      return this.phimhots =this.filmService.getFilmHots('phimmois');
    else
      return this.phimhots;
  }

}
