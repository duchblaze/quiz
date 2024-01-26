import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { AngularServiceService } from 'src/app/service/angular-service.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  public name: string = '';
  public questionList: any = [];
  public currentQuestion: number = 0;
  public points: number = 0;
  public counter: number = 15;
  public correctAnswer: number = 0;
  public wrongAnswer: number = 0;
  public interval$: any;
  public progress: string = '0';
  public isQuizCompleted: boolean = false;

  constructor(
    private angularService: AngularServiceService
  ) {}
  ngOnInit() {
    this.name = localStorage.getItem('name')!;
    this.showQuestions();
    this.startCounter();
  }

  showQuestions() {
    this.angularService.getQuestions().subscribe((res) => {
      // console.log(res.questions)
      this.questionList = res.questions;
      // console.log(this.questionList, 'this is the array')
    })
  }

  showNextQuestion() {
    this.currentQuestion++
  }

  showPreviousQuestion() {
    if (this.currentQuestion > 0) {
      this.currentQuestion--
    }
  }

  resetQuestion() {
    this.resetCounter();
    // this.showQuestions();
    this.points = 0;
    this.currentQuestion = 0;
    this.progress = '0';
    // this.counter = 60;
  }

  answer(currentQno: number, option: any) {
    if (currentQno === this.questionList.length) {
      this.isQuizCompleted = true;
      this.stopCounter()
    }
    if (option.correct) {
      this.points += 10;
      this.correctAnswer++;
      setTimeout(() => {
        this.currentQuestion++
        this.resetCounter();
        this.progressBar();
      }, 1000)
    } else {
      setTimeout(() => {
        this.wrongAnswer++;
        this.currentQuestion++;
        this.resetCounter();
        this.progressBar();
      }, 1000);
      this.points -= 10;
    }
  }

  progressBar() {
    this.progress = ((this.currentQuestion / this.questionList.length) * 100).toString();
    return this.progress;
  }

  startCounter() {
    this.interval$ = interval(1000).subscribe((val) => {
      this.counter--;
      if (this.counter === 0) {
        this.currentQuestion++;
        this.counter = 15;
        this.points -= 10;
      }
    });
    setTimeout(() => {
      this.interval$.unsubscribe();
    }, 150000);
    // this.counter = 0;
    // this.points = 0;
  }

  stopCounter() {
    this.interval$.unsubscribe();
    this.counter = 0;
  }

  resetCounter() {
    this.stopCounter();
    this.showQuestions();
    this.counter = 15;
    this.startCounter();
  }

  retakeQuiz() {
    this.isQuizCompleted = false;
    this.currentQuestion = 0;
    this.correctAnswer = 0;
    this.wrongAnswer = 0;
    // console.log(this.isQuizCompleted, 'This a test to restart the quiz!');
    this.points = 0;
    this.progress = '0';
    // setTimeout(() => {
    //   this.resetCounter()
    // }, 1000)
  }
}
