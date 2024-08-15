import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrl: './results.component.css',
})
export class ResultsComponent {
  @Input() results!: any[];

  viewDetail(result: any): void {
    alert(
      `Question: ${result.question}\nCorrect Answer: ${
        result.answer
      }\nYour Answer: ${result.userAnswer}\nCorrect: ${
        result.isCorrect ? 'Yes' : 'No'
      }`
    );
  }
}
