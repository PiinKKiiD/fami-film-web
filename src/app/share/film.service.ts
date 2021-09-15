import {FilmModel} from "./film.model";
import {Subject} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable()
export class FilmService{

  constructor(private http: HttpClient) {
  }

  private firebaseStoragePath = 'https://fami-film-default-rtdb.asia-southeast1.firebasedatabase.app/';

  filmsChanged = new Subject<FilmModel[]>();

  getPhimBos$(){
    return this.http.get<FilmModel[]>(this.firebaseStoragePath +'phimbos.json');
  }

  getPhimHoatHinhs$(){
    return this.http.get<FilmModel[]>(this.firebaseStoragePath + 'phimhoathinhs.json');
  }
  getPhimMois$(){
    return this.http.get<FilmModel[]>(this.firebaseStoragePath + 'phimmois.json');
  }

  getPhimLes$(){
    return this.http.get<FilmModel[]>(this.firebaseStoragePath + 'phimles.json');
  }

  getQuanLys$(){
    return this.http.get<FilmModel[]>(this.firebaseStoragePath + 'quanlys.json');
  }

  //Quan ly ------------------------------------------------------------:
  getPhimBoHots$(){
    return this.http.get<FilmModel[]>(this.firebaseStoragePath + 'phimhoathinhs.json');
  }

  getPhimHoatHinhHots$(){
    return this.http.get<FilmModel[]>(this.firebaseStoragePath + 'phimles.json');
  }

  getPhimMoiHots$(){
    return this.http.get<FilmModel[]>(this.firebaseStoragePath +'phimbos.json');
  }

  getPhimLeHots$(){
    return this.http.get<FilmModel[]>(this.firebaseStoragePath +'phimmois.json');
  }

  // ---------------------------------------------------------------------------------

  addFilmToQuanLy(film: FilmModel){
    /*this.quanlys.push(film);
    this.filmsChanged.next(this.quanlys.slice());*/
  }

  updateFilmToQuanLy(film: FilmModel, id: number){
    /*this.quanlys[id] = film;
    this.filmsChanged.next(this.quanlys.slice());*/
  }

  delFilmFromQuanLy(index: number){
    /*this.quanlys.splice(index,1);

    this.filmsChanged.next(this.quanlys.slice());*/
    const id = 'quanlys/' +index;
    /*let httpParams = new HttpParams();
    httpParams.set('id',index);
    const option = {params: httpParams}*/
    this.getQuanLys$().subscribe(
      quanlys =>{
        quanlys.splice(index,1);
        this.http.put(
          this.firebaseStoragePath+'quanlys.json',
          quanlys
        ).subscribe(data => {
          console.log('deleted');
          this.filmsChanged.next(quanlys);
        })


      }
    )
  }

  getFilmFromQuanLy(index: number){
    //return this.quanlys.slice()[index];
  }

}
