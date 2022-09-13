import getRandomNumber from '../random.js';
import runEngineGame from '../index.js';

const gameDescription = 'What number is missing in the progression?';
const progressionLength = 10;

const getArithmeticProgression = (firstNumber, progressionStep, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(firstNumber + i * progressionStep);
  }

  return progression;
};

const generateRounds = () => {
  const firstNumber = getRandomNumber(1, 100);
  const progressionStep = getRandomNumber(1, 50);
  const progression = getArithmeticProgression(firstNumber, progressionStep, progressionLength);
  const hiddenElementIndex = getRandomNumber(0, progression.length);
  const correctAnswer = progression[hiddenElementIndex].toString();
  progression[hiddenElementIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const runProgressionGame = () => runEngineGame(gameDescription, generateRounds);

export default runProgressionGame;
