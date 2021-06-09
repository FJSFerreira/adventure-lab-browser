import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private endpoint = 'api/'

  constructor(private httpClient: HttpClient) { }

  public getAllAdventures(latitude: number, longitude: number): Observable<Object> {

    let url = this.endpoint + 'SearchV3?origin.latitude=' + latitude + '&origin.longitude=' + longitude
    
    return this.httpClient.get(url)
  }

  public getAdventureById(id: string): Observable<Object> {

    let url = this.endpoint + id

    return this.httpClient.get(url)
  }
}
