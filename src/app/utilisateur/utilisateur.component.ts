import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiUtilisateurService } from '../services/api-utilisateur.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {
  users:any=[];
  term: string;
  constructor(private service:ApiUtilisateurService, 
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getUsers();
  }


  getUsers(){
      this.service.allUsers().subscribe(data=>{
        this.users = data;
      }, error=>{
        console.log("erreur");
      })
  }

  traiterUser(id, action){
    this.service.validerCompte(id, action).subscribe(data=>{
      this.users= [];
      this.getUsers();
        this.toastr.success("Compte Validée avec success",'Success');
    }, error=>{
      console.log("Erreur");
    })
  }
}

 