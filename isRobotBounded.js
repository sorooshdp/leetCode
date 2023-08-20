/**
 * @param {string} instructions
 * @return {boolean}
 */
const isRobotBounded = function (instructions) {
  const instruction = instructions.split("");
  const directions = ["N", "W", "S", "E"];
  let directionIndex = 0;
  let x = 0;
  let y = 0;
  let direction = directions[directionIndex];

  for (const command of instruction) {
    if (command === "G") {
      if (directionIndex === 0) {
        y++;
      } else if (directionIndex === 1) {
        x--;
      } else if (directionIndex === 2) {
        y--;
      } else if (directionIndex === 3) {
        x++;
      }
    } else if (command === "L") {
      if (directionIndex === 0) directionIndex = 3;
      else directionIndex--;
    } else if (command === "R") {
      if (directionIndex === directions.length - 1) directionIndex = 0;
      else directionIndex++;
    }
  }

  if (x === 0 && y === 0) return true;
  if (directionIndex !== 0) return true;
  return false;
};

console.log(isRobotBounded())
