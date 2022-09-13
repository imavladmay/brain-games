import getRandomNumber from '../random.js';
import runEngineGame from '../index.js';

const gameDescription = 'What is the result of the expression?';

const calculateValue = (firstNumber, randomOperator, secondNumber) => {
  switch (randomOperator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      throw new Error(`Unknown arithmetic operator "${randomOperator}"!`);
  }
};

const generateRounds = () => {
  const arithmeticOperators = ['+', '-', '*'];
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  const randomOperator = arithmeticOperators[getRandomNumber(0, 3)];
  const question = `${firstNumber} ${randomOperator} ${secondNumber}`;
  const correctAnswer = calculateValue(firstNumber, randomOperator, secondNumber).toString();
  return [question, correctAnswer];
};

const runCalcGame = () => runEngineGame(gameDescription, generateRounds);

export default runCalcGame;
