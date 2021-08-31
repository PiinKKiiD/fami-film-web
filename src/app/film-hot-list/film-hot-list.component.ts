import {Component, Input, OnInit} from '@angular/core';
import {FilmModel} from "../share/film.model";

@Component({
  selector: 'app-film-hot-list',
  templateUrl: './film-hot-list.component.html',
  styleUrls: ['./film-hot-list.component.css']
})
export class FilmHotListComponent implements OnInit {

  constructor() { }
  @Input() filmhots: FilmModel[] = [];
  ngOnInit(): void {
  }

}
