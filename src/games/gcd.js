import readlineSync from 'readline-sync';

const gcdGame = () => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);
  console.log('Find the greatest common divisor of given numbers.');

  const getRandomInt = (max) => Math.floor(Math.random() * max);

  const getGCD = (firstNumber, secondNumber) => {
    if (firstNumber === 0) {
      return secondNumber;
    }

    while (secondNumber !== 0) {
      if (firstNumber > secondNumber) {
        firstNumber -= secondNumber;
      } else {
        secondNumber -= firstNumber;
      }
    }

    return firstNumber;
  };

  for (let i = 0; i < 3; i += 1) {
    const firstNumber = getRandomInt(100);
    const secondNumber = getRandomInt(100);
    const gcd = getGCD(firstNumber, secondNumber);

    console.log('Question:', firstNumber, secondNumber);

    const answerUser = readlineSync.question('Your answer: ');
    const conversionToNumber = Number(answerUser);

    if (conversionToNumber === gcd) {
      console.log('Correct!');
    } else {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${gcd}'.\nLet's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default gcdGame;
