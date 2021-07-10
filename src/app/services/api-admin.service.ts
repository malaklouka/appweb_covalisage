import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiAdminService {
  urlAPIS = "http://127.0.0.1/apis_covalisage_web/" ;
  constructor(private http: HttpClient) { }

  verifAdmin(mail, pass){
    let body = {email:mail, mdp : pass};
    return this.http.post(this.urlAPIS+"login.php", body);
  }

  getStats(){
    return this.http.get(this.urlAPIS+"stats.php")
  }

  isLogged(){
    if(localStorage.getItem("token")!=null){
      console.log("true");
      return true ;
    }else {
      console.log("false");
      return false; 
    }
  }

}
