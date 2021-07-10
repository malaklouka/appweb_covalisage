import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiAdminService } from '../services/api-admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logForm: FormGroup; 
  constructor( private fb: FormBuilder, private service : ApiAdminService, private router:Router, 
    private toastr: ToastrService) {
    let formControls = {
      mail: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    } 
    this.logForm = this.fb.group(formControls)
  }

  get password() { return this.logForm.get('password') }
  get mail() { return this.logForm.get('mail') }



  ngOnInit(): void {
    let isLoggedIn = this.service.isLogged(); 
    if (isLoggedIn) {
      this.router.navigate(['/home']);
    } 
  }

  verifUser(){
    let data = this.logForm.value ; 
    console.log("data : "+data); 
    this.service.verifAdmin(data.mail, data.password).subscribe(res=>{
      console.log("iddddddddddddddd : "+res['id'] );
      if(res['id'] !=null){
        let myToken = this.randStr(32);
        console.log("Token : "+myToken);
        localStorage.setItem("NP", res['nom_prenom']);
        localStorage.setItem("token", myToken);
        this.router.navigate(['/home']);
      }else{ 
        //this.toastr.error("E-mail ou Mot de passe Incorrecte",'Erreur');
        this.toastr.error('everything is broken', 'Major Error', {
          timeOut: 2000,
        });
      }
    },error=>{
      console.log("Erreur");
    })
  }

  randStr(len) {
    let s = '';
    while (len--) s += String.fromCodePoint(Math.floor(Math.random() * (126 - 33) + 33));
    return s;
  }

}


