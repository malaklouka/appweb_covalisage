import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiReclamationService {
  urlAPIS = "http://127.0.0.1/apis_covalisage_web/Reclamation/" ;
  constructor(private http: HttpClient) { }

  allReclamations(){
    return this.http.get(this.urlAPIS+"reclamations.php");
  }

 
}
 
