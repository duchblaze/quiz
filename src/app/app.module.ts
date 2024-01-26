import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'

import { FormsModule } from '@angular/forms';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SoftwareQuizComponent } from './software-quiz/software-quiz.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ResponsiveDirective } from './directive/responsive.directive';
import { QuestionsComponent } from './my-quiz/questions/questions.component';
import { ChangeBgDirective } from './directive/change-bg.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    ResultComponent,
    NavbarComponent,
    SoftwareQuizComponent,
    HomepageComponent,
    ResponsiveDirective,
    QuestionsComponent,
    ChangeBgDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
