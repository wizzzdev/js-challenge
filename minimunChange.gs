const testInput = [5, 7, 1, 1, 2, 3, 22];

const calculateMinimumChange = arr => {
  let change = 0;
  const sortedArray = arr
    .sort((a, b) => a > b ? 1 : -1);
  
  	sortedArray.forEach((a) => {
      if (change - a > -2) {
        change += a
      }
      
  	})
  
  return change + 1;
};

calculateMinimumChange(testInput);
calculateMinimumChange([1, 1, 1, 1, 1])
calculateMinimumChange([1, 5, 1, 1, 1, 10, 15, 20, 100])
