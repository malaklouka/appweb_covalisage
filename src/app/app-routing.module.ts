import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { AuthGuard } from '../app/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path:'login', component:LoginComponent},
  { path:'',   redirectTo: '/login', pathMatch: 'full'},
  { path:'home', component:HomeComponent, canActivate:[AuthGuard], 
  children: [ 
              { path:'', component:DashboardComponent},
              { path:'users', component:UtilisateurComponent},
              { path:'reclamations', component:ReclamationComponent},
              { path:'annonces', component:AnnonceComponent},
        ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
