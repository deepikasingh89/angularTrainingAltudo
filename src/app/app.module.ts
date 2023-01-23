import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { MainService } from './main.service';
import { InputformatDirective } from './inputformat.directive';
import { SummaryPipe } from './summary.pipe';
import { HighlightComponent } from './highlight/highlight.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './common/navbar/navbar.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { ProductsComponent } from './products/products.component';
import { ProductsEditComponent } from './products-edit/products-edit.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductViewComponent } from './product-view/product-view.component';

@NgModule({
  declarations: [
    AppComponent,
    InputformatDirective,
    SummaryPipe,
    HighlightComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CoursesComponent,
    ProductsComponent,
    ProductsEditComponent,
    NotfoundComponent,
    ProductViewComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, LoginModule, FormsModule],
  providers: [MainService],
  bootstrap: [AppComponent],
})
export class AppModule {}
