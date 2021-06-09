import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DataService } from 'src/app/data.service';
import { HelperService } from 'src/app/helper.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  adventure: Object | undefined

  constructor(private route: ActivatedRoute,private router: Router, private dataService: DataService, private helperService: HelperService) { }

  ngOnInit(): void {
    
    let id = this.route.snapshot.paramMap.get('id') || ''

    if(id != '') {
      this.dataService.getAdventureById(id).subscribe((adventure: any) => {
        this.adventure = adventure
      })
    }
  }

  master(): void {

    this.router.navigate(['master'])
  }

  navigate(url: string): void {

    window.open(url, '_blank')
  }
}

