import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Calculator} from "../calculator";
import {Observable, catchError, retry, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {

  }

  rootURL = 'http://127.0.0.1:8083/api';
  history = {};

  getHistory() {
    return this.http.get(this.rootURL + '/calculator').pipe(
      retry(3), catchError(this.handleError)
    );
  }

  addCalculation(calculation: Calculator){
    this.http.post<Calculator>(this.rootURL + '/calculator', calculation).pipe(
        retry(3), catchError(this.handleError)
      ).subscribe(data => {
        console.log(data)
      });
  }

  handleError(error:any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    return throwError(() => {
      return errorMessage;
    });
  }

}
