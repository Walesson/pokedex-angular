import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { throwError } from 'rxjs'
import { catchError, retry, map, shareReplay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  static headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json' });
  static BASE_URL: String = 'https://pokeapi.co/api/v2';

  constructor(
    private http: HttpClient,
  ) {
  }

  get(url:String, params:String = '') {
    return this.http.get(`${ConfigService.BASE_URL}/${url}${params}`, {headers: ConfigService.headers}).pipe(catchError(this.handleError)).pipe(shareReplay({refCount: true, bufferSize: 1}))
  }

  // livre
  getWithoutBase(url:String, params:String = '') {
    return this.http.get(`${url}${params}`, {headers: ConfigService.headers}).pipe(catchError(this.handleError), shareReplay({refCount: true, bufferSize: 1}))
  }

  post(url:String, params:String = '', body:Object = {}) {
    return this.http.post<any>(`${ConfigService.BASE_URL}/${url}${params}`, body, {headers: ConfigService.headers}).pipe(catchError(this.handleError), shareReplay({refCount: true, bufferSize: 1}))
  }

  put(url:String, params:String = '', body:Object = {}) {
    return this.http.put<any>(`${ConfigService.BASE_URL}/${url}${params}`, body, {headers: ConfigService.headers}).pipe(catchError(this.handleError), shareReplay({refCount: true, bufferSize: 1}))
  }

  delete(url:String, params:String = '') {
    return this.http.delete<any>(`${ConfigService.BASE_URL}/${url}${params}`, {headers: ConfigService.headers}).pipe(catchError(this.handleError), shareReplay({refCount: true, bufferSize: 1}))
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error';

    if(error instanceof ErrorEvent) {
      errorMessage = `Error: ${errorMessage}`;
    }
    if(error.status && error.message) {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`
    }

    return throwError(errorMessage)
  }
}
