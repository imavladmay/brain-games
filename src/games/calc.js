import getRandomNumber from '../random.js';
import runEngineGame from '../index.js';

const gameDescription = 'What is the result of the expression?';

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
  const arithmeticOperators = ['+', '-', '*'];
  const leftOperand = getRandomNumber(1, 100);
  const rightOperand = getRandomNumber(1, 100);
  const expressionOperator = arithmeticOperators[getRandomNumber(0, 3)];
  const question = `${leftOperand} ${expressionOperator} ${rightOperand}`;
  const correctAnswer = calculateValue(leftOperand, expressionOperator, rightOperand).toString();
  return [question, correctAnswer];
};

const runCalcGame = () => runEngineGame(gameDescription, generateRound);

export default runCalcGame;
