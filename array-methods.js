// arr = [1, 2, 45, 4, 47, 35, 54, 6, 7, 24, 10, 9]

// Using Map - Find square of each elements
arr.map((item) => item*item)
// output is (12) [1, 4, 2025, 16, 2209, 1225, 2916, 36, 49, 576, 100, 81]


// Using filter - Find the elements which are greater than 20
arr.filter((item) => item > 20)
// output is (5) [45, 47, 35, 54, 24]

// Using find - Find the element that are divisible by 5 in the array
arr.find((item) => item % 5 ==0 )
// output is 45

// Using findIndex - Find the position of the element that are divisible by 5 in the array
arr.findIndex((item) =>item % 5 == 0)
// output is 2

// Using reduce - Find the sum of squares of elements in the array

arr.reduce((prevVal, item) => {
    return (item*item) + prevVal;
}, 0)
// output is 9238