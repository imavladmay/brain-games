import getRandomNumber from '../random.js';
import runEngineGame from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const numberForQuestion = getRandomNumber(1, 100);
  const question = numberForQuestion;
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runEvenGame = () => runEngineGame(gameDescription, generateRound);

export default runEvenGame;
