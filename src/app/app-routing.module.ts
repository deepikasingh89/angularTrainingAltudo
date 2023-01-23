import { NgModule } from '@angular/core';
import { PreloadAllModules, PreloadingStrategy, RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductsEditComponent } from './products-edit/products-edit.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'courses',
    component: CoursesComponent,
  },
  {
    path: 'products/:id/:name',
    component: ProductsComponent,
  },
  {
    path: 'products',
    children: [
      {
        path: 'edit',
        component: ProductsEditComponent,
      },
      {
        path: 'view',
        component: ProductViewComponent,
      },
    ],
  },
  {
    path:'first',
    loadChildren:()=>import('./first/first.module').then((m)=>m.FirstModule)
  },
  {
    path:"**",
    component:NotfoundComponent
  }
];

@NgModule({
  // imports: [
  //   RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  // ],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
