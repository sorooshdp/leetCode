/**
 * @param {number[]} citations
 * @return {number}
 */
const hIndex = function (citations) {
  //     const indexes = []
  //    for (let i = 0; i <= citations.length; i++) {
  //     if( i <= countGreater(citations, i)){
  //         console.log(countGreater(citations, i))
  //         indexes.push(i)
  //     }
  //    }

  //    return Math.max(...indexes)
  let h = 0;
  citations.sort((a, b) => b - a);

  while (citations[h] > h) {
    h++;
  }

  return h;
};

const countGreater = function (arr, toCmp) {
  let count = 0;
  arr.forEach((element) => {
    if (element >= toCmp) {
      count++;
    }
  });

  return count;
};

console.log(hIndex([1]));
