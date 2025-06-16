export const calcNums = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2

    case '-':
      return num1 - num2

    case '*':
      return num1 * num2
  }
}

export const generationMathOperator = () => {
  const num = Math.floor(Math.random() * 3)

  switch (num) {
    case 0:
      return '+'

    case 1:
      return '-'

    default:
      return '*'
  }
}

export const isEven = num => {
  if (num % 2 === 0) {
    return true
  }

  return false
}

export const generationNumber = () => {
  return Math.floor(Math.random() * 101);
};