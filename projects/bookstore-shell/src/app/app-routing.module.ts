import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () => import('auth-mfe/Module').then((m) => m.AuthModule),
  },
  {
    path: 'books',
    loadChildren: () => import('book-mfe/Module').then((m) => m.BookModule),
  },
  {
    path: 'newbook',
    loadChildren: () => import('book-mfe/Module').then((m) => m.BookModule),
  },
  {
    path: 'list',
    loadChildren: () => import('book-mfe/Module').then((m) => m.BookModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
