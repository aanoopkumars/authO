import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthoriseComponent } from 'src/app/authorise/authorise.component';

const routes: Routes = [
  { path: 'authorise', component: AuthoriseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
