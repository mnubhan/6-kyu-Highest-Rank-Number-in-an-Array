const highestRank = arr =>{
  let uniqueArr = [...new Set(arr)].sort((a, b) => a - b);
  let valueArr = uniqueArr.map(x=>arr.filter(y=>y==x).length)
  return uniqueArr[valueArr.findLastIndex((x) => x == Math.max(...valueArr))];
}

function highestRank(arr) {
  var getNum = num => arr.filter(n => n === num).length;
  return arr.sort((a,b) => getNum(b) - getNum(a) || b - a)[0];
}

const highestRank = arr =>
  arr.sort((a, b) => arr.filter(val => val === b).length - arr.filter(val => val === a).length || b - a)[0];
