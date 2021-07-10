import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  admin :String ; 
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.admin =localStorage.getItem("NP");
  }

  logout(){
    localStorage.removeItem("NP");
    localStorage.removeItem("token");
    localStorage.clear();
      this.router.navigate(['login']);
  }
}
