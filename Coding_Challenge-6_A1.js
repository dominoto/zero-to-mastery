// Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

let arrayFromAbove = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];

//Function expression
const answer = function (numbers) {

    //Sorting the numbers
    numbers.sort((a, b) => a - b);

    //Counting duplicates
    const counts = {};
    numbers.forEach((x) => {
        counts[x] = (counts[x] || 0) + 1;
    });
    console.log("Counted duplicates: ", counts);

    //Creating new empty array
    let newArray = [];

    //Filling new array according to count
    for (let key in counts) {
        if (counts[key] === 1) {
            newArray.push(parseInt(key));
        } else {
            let tempArray = new Array(counts[key]);
            tempArray.fill(parseInt(key), 0, counts[key]);
            newArray.push(tempArray);
        }
    }
    console.log("Filling new array according to count: ", newArray);
}


//BONUS
let bonusArray = [1, "2", "3", 2];

const bonusAnswer = function (numbers) {

    //Sorting the numbers
    numbers.sort((a, b) => a - b);

    //Creating new empty arrays, one for numbers, one for strings, one for joining
    let numArray = [];
    let stringArray = [];
    let joinedArray = [];

    //Filling new arrays according to type
    for (let i in numbers) {
        if (typeof numbers[i] === 'string') {
            stringArray.push(numbers[i]);
        } else {
            numArray.push(numbers[i]);
        }
    }

    //Putting arrays into joined array
    joinedArray.push(numArray, stringArray);
    console.log("Putting arrays into joined array: ", joinedArray);
}

//Calling the functions
answer(arrayFromAbove);
bonusAnswer(bonusArray);
