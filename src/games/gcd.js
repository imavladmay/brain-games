import getRandomNumber from '../random.js';
import runEngineGame from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getGCD = (firstNumber, secondNumber) => {
  if (!secondNumber) {
    return firstNumber;
  }

  return getGCD(secondNumber, firstNumber % secondNumber);
};

const generateRounds = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = getGCD(firstNumber, secondNumber).toString();
  return [question, correctAnswer];
};

const runGCDGame = () => runEngineGame(gameDescription, generateRounds);

export default runGCDGame;
