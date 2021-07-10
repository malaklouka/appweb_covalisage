import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiUtilisateurService {
  urlAPIS = "http://127.0.0.1/apis_covalisage_web/Utilisateur/" ;
  constructor(private http: HttpClient) { }

  allUsers(){
    return this.http.get(this.urlAPIS+"utilisateurs.php");
  }

  validerCompte(id, etat){
    let body = {id:id, etat:etat};
    return this.http.post(this.urlAPIS+"valider_compte.php", body);
  }
}
 