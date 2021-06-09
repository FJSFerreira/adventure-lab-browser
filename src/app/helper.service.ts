import { formatNumber } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  private locale: string = 'en-US'
  private format: string = '1.0-0'

  constructor() { }
  
  private getDistance(latitude1: number, longitude1: number, latitude2: number, longitude2: number): number {
    
    // fonte: https://pt.wikipedia.org/wiki/Ortodromia

    let radLatitude1 = (Math.PI * latitude1) / 180
    let radLatitude2 = (Math.PI * latitude2) / 180
    let theta = longitude1 - longitude2
    let radtheta = (Math.PI * theta) / 180
    let distancia = Math.sin(radLatitude1) * Math.sin(radLatitude2) + Math.cos(radLatitude1) * Math.cos(radLatitude2) * Math.cos(radtheta)
    distancia = Math.acos(distancia)
    distancia = (distancia * 180) / Math.PI
    distancia = distancia * 60 * 1.8531596160000001

    return distancia
  }

  getFormattedDistance(latitude1: number, longitude1: number, latitude2: number, longitude2: number): string {

    let distance = this.getDistance(latitude1, longitude1, latitude2, longitude2)

    if(distance < 1) {
      return formatNumber(distance/1000, this.locale, this.format) + ' m'
    }
    else {
      return formatNumber(distance, this.locale, this.format) + ' km'
    }
  }

  isNew(publishedDate: string): boolean {

    let now = new Date()
    let date = new Date(publishedDate)

    return now.getTime() - date.getTime() < 30*24*60*60*1000
  }

  localizeBoolean(boolean: boolean): string {

    return boolean ? 'sim' : 'não'
  }
}
