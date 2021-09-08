import {NgModule} from "@angular/core";
import {QuanLyComponent} from "./quan-ly.component";
import {UpdFilmComponent} from "./upd-film/upd-film.component";
import {DelFilmConfirmComponent} from "./del-film-confirm/del-film-confirm.component";
import {AddDialogComponent} from "./add-dialog/add-dialog.component";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ShareModule} from "../share/share.module";

@NgModule({
  declarations:[
    QuanLyComponent,
    UpdFilmComponent,
    DelFilmConfirmComponent,
    AddDialogComponent],
  imports: [
    FormsModule,
    RouterModule,
    ShareModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: '', component: QuanLyComponent}
    ]),
  ],
  exports:[
    QuanLyComponent,
    UpdFilmComponent,
    DelFilmConfirmComponent,
    AddDialogComponent],
  entryComponents: [AddDialogComponent, DelFilmConfirmComponent, UpdFilmComponent],
})
export class QuanLyModule{

}
