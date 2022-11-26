/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  let answer = [];
  for (let i = 0; i < board.length; i++) {
    let row = [];
    for (let j = 0; j < board[0].length; j++) {
      let alives = numOfLives(board, i, j);

      if (board[i][j]) {
        if (alives > 3 || alives < 2) {
          row.push(0);
        } else {
          row.push(1);
        }
      } else if (!board[i][j]) {
        if (alives === 3) {
          row.push(1);
        } else {
          row.push(0);
        }
      }
    }
    answer.push(row);
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      board[i][j] = answer[i][j];
    }
  }
};

const numOfLives = function (board, x, y) {
  let count = 0;
  for (let i = x - 1; i < x + 2; i++) {
    for (let j = y - 1; j < y + 2; j++) {
      if (!(i == x && j == y) && isLive(board, i, j)) {
        count++;
      }
    }
  }
  return count;
};

const isLive = function (board, i, j) {
  if (i < 0 || j < 0 || i >= board.length || j >= board[0].length) {
    return false;
  }
  if (board[i][j] >= 1) {
    return true;
  }
  return false;
};

console.log(
  gameOfLife([
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0],
  ])
);
