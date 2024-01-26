import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoftwareQuizComponent } from './software-quiz/software-quiz.component';
import { HomepageComponent } from './homepage/homepage.component';
import { QuestionsComponent } from './my-quiz/questions/questions.component';

const routes: Routes = [
  { path: '', redirectTo: 'app-homepage',  pathMatch: 'full'},
  { path: 'app-software-quiz', component: SoftwareQuizComponent },
  { path: 'app-homepage', component: HomepageComponent },
  {path: 'app-questions', component: QuestionsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
