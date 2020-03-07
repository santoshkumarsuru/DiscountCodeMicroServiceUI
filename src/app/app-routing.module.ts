import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReceipentComponent } from './receipent/receipent.component';
import { SofferComponent } from './soffer/soffer.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "admin", component: ReceipentComponent },
  { path: "soffer", component: SofferComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
