import readlineSync from 'readline-sync';

const evenGame = () => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const getRandomInt = (max) => Math.floor(Math.random() * max);

  for (let i = 0; i < 3; i += 1) {
    const number = getRandomInt(100);
    console.log('Question:', number);
    const answerUser = readlineSync.question('Your answer: ');

    const firstChecking = (number % 2 === 0) && (answerUser === 'yes');
    const secondChecking = (number % 2 !== 0) && (answerUser === 'no');

    if (firstChecking === true || secondChecking === true) {
      console.log('Correct!');
    } else {
      const oppositeAnswer = answerUser === 'yes' ? 'no' : 'yes';
      const errorMessage = `'${answerUser}' is wrong answer ;(. Correct answer was '${oppositeAnswer}'.\nLet's try again, ${userName}!`;
      console.log(errorMessage);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default evenGame;
