import getRandomNumber from '../random.js';
import runEngineGame from '../index.js';

const gameDescription = 'What number is missing in the progression?';
const progressionLength = 10;
const minNumber = 0;
const maxNumber = 100;
const minNumberForStep = 1;
const maxNumberForStep = 50;

const getProgression = (firstNumber, progressionStep, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(firstNumber + i * progressionStep);
  }

  return progression;
};

const generateRound = () => {
  const firstNumber = getRandomNumber(minNumber, maxNumber);
  const progressionStep = getRandomNumber(minNumberForStep, maxNumberForStep);
  const progression = getProgression(firstNumber, progressionStep, progressionLength);
  const hiddenElementIndex = getRandomNumber(minNumber, progression.length);
  const correctAnswer = progression[hiddenElementIndex].toString();
  progression[hiddenElementIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const runProgressionGame = () => runEngineGame(gameDescription, generateRound);

export default runProgressionGame;
