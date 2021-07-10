import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiAnnonceService {
  urlAPIS = "http://127.0.0.1/apis_covalisage_web/Annonces/" ;
  constructor(private http: HttpClient) { }

  allAnnonces(){
    return this.http.get(this.urlAPIS+"annonces.php");
  }

  traiterAnnonce(id, etat){
    let body = {id:id, etat:etat};
    return this.http.post(this.urlAPIS+"traiter_annonces.php", body);
  }
}
