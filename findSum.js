function findSum(arr, target) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == target) console.log(arr[i], arr[j]);
    }
  }
}

function findSumForTarget(arr, target) {
  for (var i = 0; i < arr.length; i++) {
    if (arr.includes(target - arr[i])) {
      console.log(arr[i], target - arr[i]);
      return true;
    }
  }
  return -1;
}
