import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class AppService {

  constructor(
    private http: HttpClient
  ) { }
    getSections() {
      return this.http.get('assets/app.sections.config.json')
        .map((response: any) => response.appData)
        .switchMap((response: any) => {
          return Observable.of(response);
        })
        .catch((error: any) => {
          return Observable.of(new Error(error));
        })
    }
}
