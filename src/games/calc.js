import getRandomNumber from '../random.js';
import { runEngineGame, roundsCount } from '../index.js';

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
  const rounds = [];
  const arithmeticOperators = ['+', '-', '*'];
  for (let i = 0; i < roundsCount; i += 1) {
    const firstNumber = getRandomNumber(1, 100);
    const secondNumber = getRandomNumber(1, 100);
    const randomOperator = arithmeticOperators[getRandomNumber(0, 3)];
    const question = `${firstNumber} ${randomOperator} ${secondNumber}`;
    const correctAnswer = calculateValue(firstNumber, randomOperator, secondNumber).toString();
    const round = [question, correctAnswer];
    rounds.push(round);
  }

  return rounds;
};

const runCalcGame = () => {
  const gameResults = generateRounds();
  return runEngineGame(gameDescription, gameResults);
};

export default runCalcGame;
