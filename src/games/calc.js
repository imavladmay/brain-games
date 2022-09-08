import readlineSync from 'readline-sync';

const calcGame = () => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');

  const getRandomInt = (max) => Math.floor(Math.random() * max);

  const arithmeticOperators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * arithmeticOperators.length);
  const randomOperator = arithmeticOperators[randomIndex];

  for (let i = 0; i < 3; i += 1) {
    const firstNumber = getRandomInt(100);
    const secondNumber = getRandomInt(100);
    let expressionValue = 0;
    console.log('Question:', firstNumber, randomOperator, secondNumber);
    switch (randomOperator) {
      case '+':
        expressionValue = firstNumber + secondNumber;
        break;
      case '-':
        expressionValue = firstNumber - secondNumber;
        break;
      case '*':
        expressionValue = firstNumber * secondNumber;
        break;
      default:
        throw new Error(`Unknown order state, this arithmetic operation is absent: ${randomOperator}!`);
    }

    const answerUser = readlineSync.question('Your answer: ');
    const conversionToNumber = Number(answerUser);

    if (conversionToNumber === expressionValue) {
      console.log('Correct!');
    } else {
      const errorMessage = `'${answerUser}' is wrong answer ;(. Correct answer was '${expressionValue}'.\nLet's try again, ${userName}!`;
      console.log(errorMessage);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default calcGame;
