import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Result } from '../../interfaces/result';
import { MathService } from '../../services/math.service';

// interface Result {
//   question: string;
//   answer: number;
//   userAnswer: number | null;
//   isCorrect: boolean;
// }

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
})
export class CalculatorComponent implements OnInit {
  // currentQuestion: string;
  // correctAnswer: number;
  // userAnswer: number | null;
  // results: Result[] = [];
  // points: number = 0;
  // timer: any;
  // timeLeft: number = 10;

  // constructor(private mathService: MathService) {}

  // ngOnInit(): void {
  //   this.nextQuestion();
  //   this.startTimer();
  // }

  // nextQuestion(): void {
  //   const operation = this.mathService.generateOperation();
  //   this.currentQuestion = operation.question;
  //   this.correctAnswer = operation.answer;
  //   this.userAnswer = null;
  //   this.timeLeft = 10;
  //   this.startTimer();
  // }

  // startTimer(): void {
  //   if (this.timer) {
  //     clearInterval(this.timer);
  //   }

  //   this.timer = setInterval(() => {
  //     if (this.timeLeft > 0) {
  //       this.timeLeft--;
  //     } else {
  //       this.submitAnswer();
  //     }
  //   }, 1000);
  // }

  // submitAnswer(): void {
  //   clearInterval(this.timer);
  //   const isCorrect = this.userAnswer === this.correctAnswer;
  //   this.results.push({
  //     question: this.currentQuestion,
  //     answer: this.correctAnswer,
  //     userAnswer: this.userAnswer,
  //     isCorrect,
  //   });

  //   if (isCorrect) {
  //     this.points += 2;
  //   }

  //   this.nextQuestion();
  // }


  @Output() resultsChange = new EventEmitter<Result[]>();
  currentQuestion: string = '';
  correctAnswer: number = 0;
  userAnswer: number | null = null;
  results: Result[] = [];
  points: number = 0;
  timer: any;
  timeLeft: number = 10;
  questionCount: number = 0;
  maxQuestions: number = 10;
  bestScore: number = 0;
  gameActive: boolean = true;
  selectedDifficulty: string = 'easy';

  constructor(private mathService: MathService) {}

  ngOnInit(): void {
    this.nextQuestion();
  }

  selectDifficulty(difficulty: string): void {
    this.selectedDifficulty = difficulty;
    this.startNewGame();
  }

  startNewGame(): void {
    this.points = 0;
    this.questionCount = 0;
    this.results = [];
    this.gameActive = true;
    this.nextQuestion();
  }

  nextQuestion(): void {
    // const operation = this.mathService.generateOperation();
    // this.currentQuestion = operation.question;
    // this.correctAnswer = operation.answer;
    // this.userAnswer = null;
    // this.timeLeft = 10;
    // this.startTimer();

    // if (this.questionCount >= this.maxQuestions) {
    //   this.endGame();
    //   return;
    // }

    // const operation = this.mathService.generateOperation();
    // this.currentQuestion = operation.question;
    // this.correctAnswer = operation.answer;
    // this.userAnswer = null;
    // this.timeLeft = 10;
    // this.startTimer();

    if (this.questionCount >= this.maxQuestions) {
      this.endGame();
      return;
    }

    const operation = this.mathService.generateOperation(this.selectedDifficulty);
    this.currentQuestion = operation.question;
    this.correctAnswer = operation.answer;
    this.userAnswer = null;
    this.timeLeft = 10;
    this.startTimer();
  }

  startTimer(): void {
    if (this.timer) {
      clearInterval(this.timer);
    }

    this.timer = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.submitAnswer();
      }
    }, 1000);
  }

  pauseGame(): void {
    clearInterval(this.timer);
    this.gameActive = false;
  }

  resumeGame(): void {
    this.startTimer();
    this.gameActive = true;
  }

  endGame(): void {
    clearInterval(this.timer);
    this.gameActive = false;
    if (this.points > this.bestScore) {
      this.bestScore = this.points;
    }
  }

  submitAnswer(): void {
    clearInterval(this.timer);
    const isCorrect = this.userAnswer === this.correctAnswer;
    this.results.push({
      question: this.currentQuestion,
      answer: this.correctAnswer,
      userAnswer: this.userAnswer,
      isCorrect,
    });

    if (isCorrect) {
      this.points += 2;
    }

    this.resultsChange.emit(this.results);
    this.questionCount++;
    this.nextQuestion();
  }

  restartGame(): void {
    this.points = 0;
    this.questionCount = 0;
    this.results = [];
    this.gameActive = true;
    this.nextQuestion();
  }
}
