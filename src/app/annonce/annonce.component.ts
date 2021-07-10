import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiAnnonceService } from '../services/api-annonce.service';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit {
  annonces:any=[];
  term: string;
  constructor(private service:ApiAnnonceService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getUsers();
  }


  getUsers(){
      this.service.allAnnonces().subscribe(data=>{
        this.annonces = data;
      }, error=>{
        console.log("erreur");
      })
  }

  traiterAnnonce(id, action){
    this.service.traiterAnnonce(id, action).subscribe(data=>{  
        this.annonces=[];
        this.getUsers();
        this.toastr.success("Annonce Validée avec success",'Success');
    }, error=>{
      console.log("Erreur");
    })
  }
}
