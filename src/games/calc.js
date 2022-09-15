import getRandomNumber from '../random.js';
import runEngineGame from '../index.js';

const gameDescription = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const minNumber = 0;
const maxNumber = 100;

const calculateValue = (firstNumber, operator, secondNumber) => {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      throw new Error(`Unknown arithmetic operator "${operator}"!`);
  }
};

const generateRound = () => {
  const leftOperand = getRandomNumber(minNumber, maxNumber);
  const rightOperand = getRandomNumber(minNumber, maxNumber);
  const expressionOperator = operators[getRandomNumber(minNumber, operators.length)];
  const question = `${leftOperand} ${expressionOperator} ${rightOperand}`;
  const correctAnswer = calculateValue(leftOperand, expressionOperator, rightOperand).toString();
  return [question, correctAnswer];
};

const runCalcGame = () => runEngineGame(gameDescription, generateRound);

export default runCalcGame;
