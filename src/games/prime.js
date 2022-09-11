import readlineSync from 'readline-sync';

const primeGame = () => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  const getRandomInt = () => Math.floor((Math.random() * 100) + 1);

  const isPrime = (number) => {
    if (number < 2) {
      return false;
    }

    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        return false;
      }
    }

    return true;
  };

  for (let i = 0; i < 3; i += 1) {
    const number = getRandomInt();
    const correctAnswer = isPrime(number) ? 'yes' : 'no';
    console.log('Question:', number);
    const userAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default primeGame;
