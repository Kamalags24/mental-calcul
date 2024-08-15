import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MathService {
  // generateOperation(): { question: string; answer: number } {
  //   const num1 = Math.floor(Math.random() * 100);
  //   const num2 = Math.floor(Math.random() * 100);
  //   const operations = ['+', '-', '*', '/'];
  //   const operation = operations[Math.floor(Math.random() * operations.length)];

  //   let answer: number;
  //   switch (operation) {
  //     case '+':
  //       answer = num1 + num2;
  //       break;
  //     case '-':
  //       answer = num1 - num2;
  //       break;
  //     case '*':
  //       answer = num1 * num2;
  //       break;
  //     case '/':
  //       answer = Math.floor(num1 / num2);
  //       break;
  //   }

  //   return { question: `${num1} ${operation} ${num2}`, answer };
  // }


  // generateOperation(): { question: string, answer: number } {
  //   const num1 = Math.floor(Math.random() * 100);
  //   const num2 = Math.floor(Math.random() * 100);
  //   const operations = ['+', '-', '*', '/'];
  //   const operation = operations[Math.floor(Math.random() * operations.length)];
    
  //   let answer: number = 0;
  //   switch (operation) {
  //     case '+':
  //       answer = num1 + num2;
  //       break;
  //     case '-':
  //       answer = num1 - num2;
  //       break;
  //     case '*':
  //       answer = num1 * num2;
  //       break;
  //     case '/':
  //       answer = Math.floor(num1 / num2); // Utilisation de Math.floor pour avoir des nombres entiers
  //       break;
  //   }

  //   return { question: `${num1} ${operation} ${num2}`, answer };
  // }

  generateOperation(difficulty: string): { question: string, answer: number } {
    let num1: number, num2: number, operation: string, answer: number;

    switch (difficulty) {
      case 'easy':
        num1 = Math.floor(Math.random() * 50) + 1;
        num2 = Math.floor(Math.random() * 50) + 1;
        operation = Math.random() > 0.5 ? '+' : '-';
        answer = operation === '+' ? num1 + num2 : num1 - num2;
        break;
      case 'medium':
        num1 = Math.floor(Math.random() * 20) + 1;
        num2 = Math.floor(Math.random() * 20) + 1;
        operation = '*';
        answer = num1 * num2;
        break;
      case 'hard':
        num1 = Math.floor(Math.random() * 100) + 1;
        num2 = Math.floor(Math.random() * 10) + 1;
        operation = '/';
        answer = Math.floor(num1 / num2);
        num1 = answer * num2; // Ajuster num1 pour s'assurer que la division est entière
        break;
      default:
        num1 = 0;
        num2 = 0;
        operation = '';
        answer = 0;
    }

    return { question: `${num1} ${operation} ${num2}`, answer };
  }
}
