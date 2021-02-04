import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from  './register/register.component';
import { StatusComponent } from './status/status.component';

const routes: Routes = [
  { path: '',  component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'status', component: StatusComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
