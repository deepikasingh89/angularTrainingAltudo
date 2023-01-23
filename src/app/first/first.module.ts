import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FirstRoutingModule } from './first-routing.module';
import { FirstComponent } from './components/first/first.component';


const routes: Routes = [
  {
    path: '',
    component: FirstComponent,
  },
];

@NgModule({
  declarations: [FirstComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class FirstModule {}
