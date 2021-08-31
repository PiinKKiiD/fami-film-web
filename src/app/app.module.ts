import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FilmListComponent } from './film-list/film-list.component';
import { SearcherComponent } from './searcher/searcher.component';
import { FilmHotListComponent } from './film-hot-list/film-hot-list.component';
import { FilmHotItemComponent } from './film-hot-list/film-hot-item/film-hot-item.component';
import { FilmListItemComponent } from './film-list/film-list-item/film-list-item.component';
import { PhimMoiComponent } from './phim-moi/phim-moi.component';
import { PhimLeComponent } from './phim-le/phim-le.component';
import { PhimBoComponent } from './phim-bo/phim-bo.component';
import { PhimHoatHinhComponent } from './phim-hoat-hinh/phim-hoat-hinh.component';
import { QuanLyComponent } from './quan-ly/quan-ly.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from "@angular/material/slider";
import {MatGridListModule} from "@angular/material/grid-list";
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule } from '@angular/common/http';
import {FilmService} from "./share/film.service";
import { PlaceholderDirective } from "./share/Placeholder/placeholder.directive";
import {MatDialogModule} from '@angular/material/dialog';
import { AddDialogComponent } from './quan-ly/add-dialog/add-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilmListComponent,
    SearcherComponent,
    FilmHotListComponent,
    FilmHotItemComponent,
    FilmListItemComponent,
    PhimMoiComponent,
    PhimLeComponent,
    PhimBoComponent,
    PhimHoatHinhComponent,
    QuanLyComponent,
    FooterComponent,
    PlaceholderDirective,
    AddDialogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatGridListModule,
    HttpClientModule,
    MatDialogModule,
    ReactiveFormsModule,
  ],
  providers: [FilmService],
  bootstrap: [AppComponent],
  entryComponents: [AddDialogComponent],
})
export class AppModule { }
