import { Component, OnInit } from '@angular/core';
import { ApiReclamationService } from '../services/api-reclamation.service';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {
  reclamations:any=[];
  term: string;
  constructor(private service:ApiReclamationService) { }

  ngOnInit(): void {
    this.getUsers();
  }


  getUsers(){
      this.service.allReclamations().subscribe(data=>{
        this.reclamations = data;
      }, error=>{
        console.log("erreur");
      })
  }
}
