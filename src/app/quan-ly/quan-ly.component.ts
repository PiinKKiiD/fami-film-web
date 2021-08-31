import { Component, OnInit } from '@angular/core';
import {FilmModel} from "../share/film.model";
import {Subscription} from "rxjs";
import {FilmService} from "../share/film.service";
import {DataStorageService} from "../share/data-storage.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {AddDialogComponent} from "./add-dialog/add-dialog.component";

@Component({
  selector: 'app-quan-ly',
  templateUrl: './quan-ly.component.html',
  styleUrls: ['./quan-ly.component.css']
})
export class QuanLyComponent implements OnInit {

  quanlys : FilmModel[] = [];
  subscription: Subscription;
  constructor(private filmService : FilmService,
              private dataStorageService: DataStorageService,
              private matDialog: MatDialog) {

  }

  ngOnInit(): void {
    this.quanlys = this.filmService.getFilms('quanlys');
    if(this.quanlys.length == 0) {
      this.dataStorageService.fetchFilm('quanlys').subscribe();
      this.subscription = this.filmService.filmsChanged
        .subscribe(
          (films: FilmModel[]) => {
            this.quanlys = films
          }
        );
    }
  }

  onAdd(){
    this.matDialog.open(AddDialogComponent);
  }
}