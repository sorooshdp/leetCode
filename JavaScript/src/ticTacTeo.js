const winningPatterns = [
  [
    [0, 0],
    [1, 1],
    [2, 2],
  ],
  [
    [0, 2],
    [1, 1],
    [2, 0],
  ],
  [
    [0, 0],
    [0, 1],
    [0, 2],
  ],
  [
    [1, 0],
    [1, 1],
    [1, 2],
  ],
  [
    [2, 0],
    [2, 1],
    [2, 2],
  ],
  [
    [2, 0],
    [1, 0],
    [0, 0],
  ],
  [
    [2, 1],
    [1, 1],
    [0, 1],
  ],
  [
    [2, 2],
    [1, 2],
    [0, 2],
  ],
];
/**
 * @param {number[][]} moves
 * @return {string}
 */
const tictactoe = function (moves) {
  const A = [];
  const B = [];

  for (let i = 0; i < moves.length; i++) {
    if (i % 2 === 0) {
      A.push(moves[i]);
    } else {
      B.push(moves[i]);
    }
  }

  const answer = checkWinner(A, B);
  if (answer === "pending" && moves.length === 9) {
    return "Draw";
  } else {
    return answer;
  }
};

const checkWinner = function (a, b) {
  let foundPatternA, foundPatternB;
  for (const pattern of winningPatterns) {
    foundPatternA = true;
    for (const element of pattern) {
      if (!a.some(([x, y]) => x === element[0] && y === element[1])) {
        foundPatternA = false;
        break;
      }
    }
    if (foundPatternA) {
      return "A";
    }
  }

  for (const pattern of winningPatterns) {
    foundPatternB = true;
    for (const element of pattern) {
      if (!b.some(([x, y]) => x === element[0] && y === element[1])) {
        foundPatternB = false;
        break;
      }
    }
    if (foundPatternB) {
      return "B";
    }
  }

  return "Pending";
};

console.log(
  tictactoe([
    [0, 0],
    [1, 1],
    [0, 1],
    [0, 2],
    [1, 0],
    [2, 0],
  ])
);
