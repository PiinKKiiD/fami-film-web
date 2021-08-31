import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-del-film-confirm',
  templateUrl: './del-film-confirm.component.html',
  styleUrls: ['./del-film-confirm.component.css']
})
export class DelFilmConfirmComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<DelFilmConfirmComponent>) { }

  ngOnInit(): void {
  }

  onCancel(){
    this.dialogRef.close();
  }

}
