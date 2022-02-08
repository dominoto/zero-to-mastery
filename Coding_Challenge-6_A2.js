// Question 2: Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3]

//Function expression
const answer = function (numbers, targetNum) {

    //Creating new empty array
    let newArray = [];

    //Loop that compares the sum of all pairs of numbers with target number
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (numbers[i] + numbers[i + j] === targetNum) {
                newArray.push([numbers[i], numbers[i + j]]);
            }
        }
    }

    if (newArray.length > 0) {
        console.log(`Numbers that give ${targetNum} when added: `, newArray);
    } else {
        console.log(`Can't find numbers that give ${targetNum} when added :(`);
    }
}

//Calling the function
answer([1, 2, 3, 4], 5);
