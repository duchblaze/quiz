import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Result } from '../interface/result';
import { ResultComponent } from '../result/result.component';
import { QuizComponent } from '../quiz/quiz.component';
import { QuizService } from '../service/quiz.service';

@Component({
  selector: 'app-software-quiz',
  templateUrl: './software-quiz.component.html',
  styleUrls: ['./software-quiz.component.css']
})
export class SoftwareQuizComponent implements OnInit{

  public questionLimit: any;
  public difficulty: string;
  public showQuizScreen!: boolean;
  public showMainMenu!: boolean;
  public showSpinner!: boolean;
  public showResultScreen!: boolean;
  public result = {} as Result;

  @ViewChild('quiz', { static: true }) quiz!: QuizComponent;
  @ViewChild('quizResult', { static: true }) quizResult!: ResultComponent;

  constructor(
    private quizService: QuizService,
    private appTitle: Title
  ) {
    this.questionLimit = 'Pick number of questions';
    this.difficulty = 'Easy';
    this.showMainMenu = true;

    this.appTitle.setTitle('Duch Technologies')
  }

  ngOnInit() {
    // this.quizQuestion();
  }

  quizQuestion() {
    this.toggleSpinner()
    this.quizService.getQuizQestion(this.difficulty, this.questionLimit).subscribe((res) => {
      console.log(res);
      this.quiz.reset(); //this reset the questions when you are taken back to the main menu component
      this.quiz.questions = res;
      this.quiz.showQuestion(0); //this is from child component
      this.showMainMenu = false;
      this.showQuizScreen = true;
    })
  }


  //from the child component
  finalResult(result: any) {
    this.quizResult.finalResult = result; //this ensures that you assign the output from quiz component to result component
    console.log(ResultComponent, 'this is result component')
    console.log(result, 'from app component');
    this.showQuizScreen = false;
    this.showResultScreen = true;

  }

  //returning to main menu screen
  showMainMenuScreen(event : any) {
    this.showMainMenu = true;
    this.showResultScreen = false;
    this.showSpinner = false;
  }

  toggleSpinner() {
    this.showSpinner = !this.showSpinner
  }
}
