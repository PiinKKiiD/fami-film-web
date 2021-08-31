import {FilmModel} from "./film.model";
import {Subject} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class FilmService{

  filmsChanged = new Subject<FilmModel[]>();
  private phimmois: FilmModel[] = [];
  private phimmoihots : FilmModel[] = [];
  private phimles: FilmModel[] = [];
  private phimlehots : FilmModel[] = [];
  private phimbos: FilmModel[] = [];
  private phimbohots : FilmModel[] = [];
  private phimhoathinhs: FilmModel[] = [];
  private phimhoathinhhots : FilmModel[] = [];
  private quanlys: FilmModel[] = [];

  setFilms(films: FilmModel[], filmType: string){
    switch (filmType) {
      case 'phimmois':
        this.phimmois = films;
        this.filmsChanged.next(this.phimmois.slice());
        break;
      case 'phimles':
        this.phimles = films;
        this.filmsChanged.next(this.phimles.slice());
        break;
      case 'phimhoathinhs':
        this.phimhoathinhs = films;
        this.filmsChanged.next(this.phimhoathinhs.slice());
        break;
      case 'phimbos':
        this.phimbos = films;
        this.filmsChanged.next(this.phimbos.slice());
        break;
      case 'quanlys':
        this.quanlys = films;
        this.filmsChanged.next(this.quanlys.slice());
        break;
    }
  }

  getFilms(filmType: string){
    switch (filmType) {
      case 'phimmois':
        return this.phimmois.slice();
        break;
      case 'phimles':
        return this.phimles.slice();
        break;
      case 'phimbos':
        return this.phimbos.slice();
        break;
      case 'phimhoathinhs':
        return this.phimhoathinhs.slice();
        break;
      case 'quanlys':
        return this.quanlys.slice();
        break;
    }
  }

  addFilmToQuanLy(film: FilmModel){
    this.quanlys.push(film);
    this.filmsChanged.next(this.quanlys.slice());
  }

  updateFilmToQuanLy(film: FilmModel, id: number){
    this.quanlys[id] = film;
    this.filmsChanged.next(this.quanlys.slice());
  }

  delFilmFromQuanLy(index: number){
    this.quanlys.splice(index,1);
    this.filmsChanged.next(this.quanlys.slice());
  }

  getFilmFromQuanLy(index: number){
    return this.quanlys.slice()[index];
  }

  getFilmHots(filmType: string){
    let startId=0;
    let endId =1;
    switch (filmType) {
      case 'phimmois':
        if(this.phimmoihots.length == 0){
          startId = Math.floor(Math.random() * this.phimmois.length);
          endId = Math.floor(Math.random() * this.phimmois.length) + startId;
          return this.phimmoihots= this.phimmois.slice(startId, endId);}
        else
          return this.phimmoihots;
        break;
      case 'phimles':
        if(this.phimlehots.length == 0){
          startId = Math.floor(Math.random() * this.phimles.length);
          endId = Math.floor(Math.random() * this.phimles.length) + startId;
          return this.phimlehots= this.phimles.slice(startId, endId);}
        else return this.phimlehots;
        break;
      case 'phimbos':
        if(this.phimbohots.length == 0){
          startId = Math.floor(Math.random() * this.phimbos.length);
          endId = Math.floor(Math.random() * this.phimbos.length) + startId;
          return this.phimbohots = this.phimbos.slice(startId, endId);}
        else return this.phimbohots;
        break;
      case 'phimhoathinhs':
        if(this.phimbohots.length == 0){
          startId = Math.floor(Math.random() * this.phimhoathinhs.length);
          endId = Math.floor(Math.random() * this.phimhoathinhs.length) + startId;
          return this.phimhoathinhhots = this.phimhoathinhs.slice(startId, endId);}
        else return this.phimhoathinhhots;

        break;
    }
  }
}
