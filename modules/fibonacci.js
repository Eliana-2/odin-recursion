function fibs(num) {
  const fibsList = [0, 1];
  for(let i = 2; i < num; i++) {
    fibsList[i] = fibsList[i - 1] + fibsList[i - 2];
  }
  return fibsList;
}

function fibsRec(num) {
  if(num === 2) {
    return [0, 1];
  }
  else {
    const currentArray = fibsRec(num - 1);
    currentArray.push(currentArray[currentArray.length - 1] + currentArray[currentArray.length - 2])
    return currentArray;
  }
}

export {fibs, fibsRec};