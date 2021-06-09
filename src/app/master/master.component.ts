import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from 'src/app/data.service';
import { LocationService } from 'src/app/location.service';
import { HelperService } from 'src/app/helper.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  adventures = []
  latitude = 0
  longitude = 0

  constructor(private router: Router, private dataService: DataService, private locationService: LocationService, private helperService: HelperService) { }

  ngOnInit(): void {
    
    this.locationService.get().then(position => {
      this.latitude = position.latitude
      this.longitude = position.longitude
    
      this.dataService.getAllAdventures(this.latitude, this.longitude).subscribe((adventures: any) => {
        this.adventures = adventures.Items
      })
    })
  }

  onClick(id: string): void {

    this.router.navigate(['detail/' + id])
  }
}
