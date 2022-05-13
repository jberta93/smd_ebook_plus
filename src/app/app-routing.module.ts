import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import {SplashScreenComponent} from "./splash-screen/splash-screen.component";

const routes: Routes = [
  {
    path: '',
    component: SplashScreenComponent
  },
  {
    path: 'books',
    component: BookListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
