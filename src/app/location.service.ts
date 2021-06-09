import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() { }

  get(): Promise<any> {

    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(response => {
          resolve({latitude: response.coords.latitude, longitude: response.coords.longitude})
        },
        err => {
          reject(err)
        })
    })
  }

  watch(): Promise<any> {
    
    return new Promise((resolve, reject) => {
      navigator.geolocation.watchPosition(response => {
          resolve({latitude: response.coords.latitude, longitude: response.coords.longitude})
        },
        err => {
          reject(err)
        })
    })
  }
}
