[1, 2, 4, 5, 3, 6, 10, 9, 43, , 32, 76, 34, 65];

function findEven(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      console.log(arr[i]);
    }
  }
}

// Using forEach
function findEvenForEach(arr) {
  arr.forEach(function (item, _index) {
    if (item % 2 == 0) {
      console.log(item);
      findEvenForEachArrow([1, 21, 2, 3]);
    }
  });
}

function findEvenByJquery(arr) {
  $(arr).each(function (item, _index) {
    if (item % 2 == 0) {
      console.log(item);
    }
  });
}

// $.each
console.log($);

// forEach arrow
const findEvenByArrow = (arr) => {
  arr.forEach((item) => {
    if (item % 2 == 0) {
      console.log(item);
    }
  });
};

// map
function findEvenByMap(arr) {
  arr.map(function (item, index) {
    if (item % 2 == 0) {
      console.log(item);
    }
  });
}

// filter
function findEvenByFilter(arr) {
  arr.filter(function (item, index) {
    if (item % 2 == 0) {
      console.log(item);
    }
  });
}

// find
function findEvenByFind(arr) {
  arr.find(function (item, index) {
    if (item % 2 == 0) {
      console.log(item);
    }
  });
}
// findIndex
function findEvenByFindIndex(arr) {
  arr.findIndex(function (item, index) {
    if (item % 2 == 0) {
      console.log(item);
    }
  });
}

// reduce

function findEvenByReduce(arr) {
  arr.reduce(function (item) {
    if (item % 2 == 0) {
      console.log(item);
    }
  });
}
