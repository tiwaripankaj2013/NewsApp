import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsdetailsComponent } from './newsdetails/newsdetails.component';
const routes: Routes = [
  {
    path: 'NewsDetails',
    component: NewsdetailsComponent,
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [NewsdetailsComponent];
