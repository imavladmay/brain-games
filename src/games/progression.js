import getRandomNumber from '../random.js';
import { runEngineGame, roundsCount } from '../index.js';

const gameDescription = 'What number is missing in the progression?';
const progressionLength = 10;

const getArithmeticProgression = (firstNumber, progressionStep, length) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(firstNumber + i * length);
  }

  return progression;
};

const generateRounds = () => {
  const rounds = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const firstNumber = getRandomNumber(1, 100);
    const progressionStep = getRandomNumber(1, 10);
    const progression = getArithmeticProgression(firstNumber, progressionStep, progressionLength);
    const hiddenElementIndex = getRandomNumber(0, progression.length);
    const correctAnswer = progression[hiddenElementIndex].toString();
    progression[hiddenElementIndex] = '..';
    const question = progression.join(' ');
    const round = [question, correctAnswer];
    rounds.push(round);
  }

  return rounds;
};

const runProgressionGame = () => {
  const gameResults = generateRounds();
  return runEngineGame(gameDescription, gameResults);
};

export default runProgressionGame;
