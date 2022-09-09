import readlineSync from 'readline-sync';

const progressionGame = () => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);
  console.log('What number is missing in the progression?');

  const getRandomInt = (max) => Math.floor(Math.random() * max);

  const getArithmeticProgression = (firstNumber, progressionStep, progressionLength) => {
    const progression = [];
    for (let i = 0; i < progressionLength; i += 1) {
      progression.push(firstNumber + i * progressionStep);
    }

    return progression;
  };

  for (let i = 0; i < 3; i += 1) {
    const firstNumber = getRandomInt(100);
    const progressionStep = getRandomInt(10);
    const progressionLength = 10;
    const progression = getArithmeticProgression(firstNumber, progressionStep, progressionLength);
    const hiddenElemetIndex = getRandomInt(progression.length - 1);
    const correctAnswer = progression[hiddenElemetIndex];
    progression[hiddenElemetIndex] = '..';
    const question = progression.join(' ');

    console.log('Question:', question);
    const userAnswer = readlineSync.question('Your answer: ');
    const conversionToNumber = Number(userAnswer);

    if (correctAnswer === conversionToNumber) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default progressionGame;
