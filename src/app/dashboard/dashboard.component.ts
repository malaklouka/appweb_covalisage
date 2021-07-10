import { Component, OnInit } from '@angular/core';
import { ApiAdminService } from '../services/api-admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  stat:any = {}; 
   constructor(private service : ApiAdminService) { }

  ngOnInit(): void {
    this.service.getStats().subscribe(res=>{
      this.stat = res ; 
    }, error=>{
      console.log("Erreur");
    })
  }

}
