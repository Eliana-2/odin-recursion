function mergeSort(array) {
  if(array.length === 1) {
    return array;
  }
  else {
    const array1 = mergeSort(array.slice(0, Math.ceil(array.length / 2)));
    const array2 = mergeSort(array.slice(Math.ceil(array.length / 2)));
    return merge(array1, array2);
  }
}

function merge(array1, array2) {
  const mergedArray = [];
  while(array1.length > 0 || array2.length > 0) {
    if(array1.length === 0) {
      mergedArray.push(array2.shift());
    }
    else if(array2.length === 0) {
      mergedArray.push(array1.shift());
    }
    else {
      const minValue = (array1[0] < array2[0]) ? array1.shift() : array2.shift();
      mergedArray.push(minValue);
    }
  }
  return mergedArray;
}

export {mergeSort}