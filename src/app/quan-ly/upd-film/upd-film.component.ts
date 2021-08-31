import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FilmService} from "../../share/film.service";
import {DataStorageService} from "../../share/data-storage.service";
import {FilmModel} from "../../share/film.model";

@Component({
  selector: 'app-upd-film',
  templateUrl: './upd-film.component.html',
  styleUrls: ['./upd-film.component.css']
})
export class UpdFilmComponent implements OnInit {
  addForm: FormGroup;
  index: number;
  constructor(public dialogRef: MatDialogRef<UpdFilmComponent>,
              @Inject(MAT_DIALOG_DATA) public data: number,
              private filmService: FilmService,
              private dataStorageService: DataStorageService) {
    this.index = data['index'];
  }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit(){
    console.log('updating');
    let newFilm = this.filmService.getFilmFromQuanLy(this.index);
    newFilm.name = this.addForm.value['filmName'];
    newFilm.type = this.addForm.value['filmType'];
    newFilm.note = this.addForm.value['filmNote'];
    this.filmService.updateFilmToQuanLy(newFilm, this.index);
    this.dataStorageService.updateQuanly2DB();
    this.dialogRef.close();
  }
  onCancel(){
    this.addForm.reset();
    this.dialogRef.close();
  }

  private initForm(){
    let filmName = '';
    let filmType = '';
    let filmNote = '';
    this.addForm = new FormGroup({
      'filmName': new FormControl(filmName, Validators.required),
      'filmType': new FormControl(filmType, Validators.required),
      'filmNote': new FormControl(filmNote)
    });
  }
}
