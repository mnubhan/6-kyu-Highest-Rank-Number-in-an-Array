const highestRank = arr =>{
  let uniqueArr = [...new Set(arr)].sort((a, b) => a - b);
  let valueArr = uniqueArr.map(x=>arr.filter(y=>y==x).length)
  return uniqueArr[valueArr.findLastIndex((x) => x == Math.max(...valueArr))];
}
