import getRandomNumber from '../random.js';
import { runEngineGame, roundsCount } from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getGCD = (firstNumber, secondNumber) => {
  if (!secondNumber) {
    return firstNumber;
  }

  return getGCD(secondNumber, firstNumber % secondNumber);
};

const generateRounds = () => {
  const rounds = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const firstNumber = getRandomNumber(1, 100);
    const secondNumber = getRandomNumber(1, 100);
    const question = `${firstNumber} ${secondNumber}`;
    const correctAnswer = getGCD(firstNumber, secondNumber).toString();
    const round = [question, correctAnswer];
    rounds.push(round);
  }

  return rounds;
};

const runGCDGame = () => {
  const gameResults = generateRounds();
  return runEngineGame(gameDescription, gameResults);
};

export default runGCDGame;
