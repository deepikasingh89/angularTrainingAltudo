import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { MainService } from './main.service';
import { CoursesComponent } from './courses.component';
import { InputformatDirective } from './inputformat.directive';
import { SummaryPipe } from './summary.pipe';
import { HighlightComponent } from './highlight/highlight.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [AppComponent,CoursesComponent, InputformatDirective, SummaryPipe, HighlightComponent],
  imports: [BrowserModule, AppRoutingModule, LoginModule, FormsModule,],
  providers: [MainService],
  bootstrap: [AppComponent],
})
export class AppModule {}
