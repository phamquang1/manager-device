import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BaseApiService {
  private httpHeaders = new HttpHeaders();
  private httpOptions = {};
  public apiUrl = 'http://vuaop.com:9090';


  constructor(
    private httpClient: HttpClient,
  ) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Content-Length': '<calculated when request is sent>',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'no-cache'
      })
    };
    this.httpHeaders = new HttpHeaders(this.httpOptions);
  }
  // api get method
  get(uri: string, params?: HttpParams) {
    return this.httpClient
      .get(this.apiUrl + uri, { headers: this.httpHeaders, params })
      .pipe(map(this.extractData));
  }

  // api post method
  post(uri: string, data?: any, params?: HttpParams) {
    return this.httpClient
      .post(this.apiUrl + uri, data, {
        headers: this.httpHeaders,
        params
      })
      .pipe(map(this.extractData));
  }

  // api post method form-data
  postFormData(uri: string, data?: any, params?: HttpParams) {
    return this.httpClient.post(this.apiUrl + uri, data, { params }).pipe(map(this.extractData));
  }

  // api put method
  put(uri: string, data?: any, params?: HttpParams) {
    return this.httpClient
      .put(this.apiUrl + uri, data, {
        headers: this.httpHeaders,
        params
      })
      .pipe(map(this.extractData));
  }

  // api put method
  putFormData(uri: string, data?: any, params?: HttpParams) {
    return this.httpClient
      .put(this.apiUrl + uri, data, {
        params
      })
      .pipe(map(this.extractData));
  }
  // put params
  putParamsFormData(uri: string, data?: any, params?: HttpParams) {
    return this.httpClient.put(this.apiUrl + uri, data, { headers: this.httpHeaders, params })
      .pipe(map(this.extractData));
  }
  // put blob
  putDownloadFile(uri: string, data?: any, params?: HttpParams) {
    return this.httpClient.put(this.apiUrl + uri, data, {
      headers: this.httpHeaders,
      responseType: 'blob' as 'json',
      params
    });
  }

  // api delete method
  delete(uri: string, params?: HttpParams) {
    return this.httpClient
      .delete(this.apiUrl + uri, {
        headers: this.httpHeaders,
        params
      })
      .pipe(map(this.extractData));
  }

  private extractData(res: HttpResponse<object>) {
    const body = res;
    return body || {};
  }
}
