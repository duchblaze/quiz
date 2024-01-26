import { Component, EventEmitter, Output } from '@angular/core';
import { Question } from '../interface/question';
import { Title } from '@angular/platform-browser';
import { Result } from '../interface/result';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {

  @Output() finalResult = new EventEmitter(); //this is where the output from this component is passed to the app component (parent component)

  public questions: Array<any>;
  public selected = {} as Question;
  public result = {} as Result;
  public index!: number;

  public answer!: string;

  constructor( private tittle: Title) {
    this.questions = [];
    this.reset();
    this.tittle.setTitle('Qiuz Questions')
  }

  showQuestion(index: number) {
    this.selected = this.questions[index]
  }

  nextQuestion() {
    if (this.answer == '') return;
    this.checkAnswer();
    this.index++;
    if (this.questions.length > this.index) {
      this.answer = '';
      this.showQuestion(this.index)
    } else {
      this.finishQuiz();
    }
  }

  checkAnswer() {
    let isAnswer = this.questions[this.index].correct_answers[this.answer];
    (isAnswer === 'true') ? this.result.correct++ : this.result.wrong++;
  }

  finishQuiz() {
    this.result.total = this.questions.length;
    this.result.correctPercentage = (this.result.correct / this.result.total) * 100;
    this.result.wrongPercentage = (this.result.wrong / this.result.total) * 100;
    console.log(this.result)
    this.finalResult.emit(this.result)
  }

  reset() {
    this.answer = '';
    this.index = 0;
    this.result = {
      total: 0,
      correct: 0,
      wrong: 0,
      correctPercentage: 0,
      wrongPercentage: 0
    }
  }

}
