import getRandomNumber from '../random.js';
import runEngineGame from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getGCD = (firstNumber, secondNumber) => {
  if (!secondNumber) {
    return firstNumber;
  }

  return getGCD(secondNumber, firstNumber % secondNumber);
};

const generateRound = () => {
  const firstNumberOfQuestion = getRandomNumber(1, 100);
  const secondNumberOfQuestion = getRandomNumber(1, 100);
  const question = `${firstNumberOfQuestion} ${secondNumberOfQuestion}`;
  const correctAnswer = getGCD(firstNumberOfQuestion, secondNumberOfQuestion).toString();
  return [question, correctAnswer];
};

const runGCDGame = () => runEngineGame(gameDescription, generateRound);

export default runGCDGame;
