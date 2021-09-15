import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {FilmService} from "./film.service";
import {Observable} from "rxjs";

@Injectable()
export class FilmInterceptorService implements HttpInterceptor{
  constructor( private filmService: FilmService){}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req.clone({setHeaders: {}}))
  }

}
