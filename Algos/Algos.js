// Given the total number of rows and columns in the theater (nRows and nCols, respectively), and the row and column you're sitting in, return the number of people who sit strictly behind you and in your column or to the left, assuming all seats are occupied.

function solution(nCols, nRows, col, row) {
    return ((nCols-(col-1))*(nRows-row))
}


// Given a divisor and a bound, find the largest integer N such that:
// N is divisible by divisor.
// N is less than or equal to bound.
// N is greater than 0.
// It is guaranteed that such a number exists.

const solution = (divisor, bound) => {
    let n = 0;
    for(let i = divisor; i < bound+1; i++){
        if(i  % divisor === 0 & i <= bound & i > 0 & i > n){
            n = i;
        }
    }
    return n
}


// Consider integer numbers from 0 to n - 1 written down along the circle in such a way that the distance between any two neighboring numbers is equal (note that 0 and n - 1 are neighboring, too).
// Given n and firstNumber, find the number which is written in the radially opposite position to firstNumber.

function solution(n, firstNumber) {
    if(n/2 === firstNumber){
        return 0
    }
    else if(n > ((n/2) + firstNumber)){
        console.log((n/2))
        return (firstNumber + (n/2))
    }
    else if(n < ((n/2) + firstNumber)){
        return (((n/2) + firstNumber)-n)  
    }
}

// Migratory Birds

function migratoryBirds(arr) {
    // Write your code here
    let newArr = [0];
    let max = 0;
    let hold = 0;
        arr.sort().map((item, i) => {
            if(arr[i] != arr[i+1]){
            newArr.push(arr.filter(num => num == arr[i]).length), newArr.push(arr[i])
            }})
    for(let i = 1; i < newArr.length; i++){
        if((i % 2 == 1) && (newArr[i] > max)){
            max = newArr[i]
            hold = newArr[i+1];
            console.log(max)
        }
        else{
            console.log('next');
        }
    }
    console.log(max)
    console.log(newArr)
    return hold;
}


// Working on this one still

function tournamentWinner(competitions, results) {
	let winners = [];
	for(let i = 0; i < results.length; i++){
		
		if(results[i] > 0){
			console.log(competitions[i][0], "homeTeam")
			winners.push(competitions[i][0])
		}
		else{
			console.log(competitions[i][1], "awayTeam")
			winners.push(competitions[i][1])
		}
		winners.sort((a,b)=> a-b)
		
		// if(results[i] == 0){
		// 	console.log(competitions[i][i], "homeTeam")
		// }
		// else if(i > 1 & results[i] > 0){
		// 	console.log(competitions[i][i-1])
		// }
		// else{
		// 	console.log(competitions[i][i], "awayTeam")
		// }
	}
	return '';
}

// Cats and Mouse
//Two cats and a mouse are at various positions on a line. You will be given their starting positions. 
//Your task is to determine which cat will reach the mouse first, assuming the mouse does not move and 
//the cats travel at equal speed. If the cats arrive at the same time, the mouse will be allowed to move and 
//it will escape while they fight.

// You are given q queries in the form of x, y, and z representing the respective positions for cats A and B, and for mouse C. 
//Complete the function  to return the appropriate answer to each query, which will be printed on a new line.

// If cat A catches the mouse first, print Cat A.
// If cat B catches the mouse first, print Cat B.
// If both cats reach the mouse at the same time, print Mouse C as the two cats fight and mouse escapes.
// EX: x=2 y=5 x=4

// The cats are at positions 2 (Cat A) and 5 (Cat B), and the mouse is at position 4. Cat B, at position 5 
//will arrive first since it is only 1 unit away while the other is 2 units away. Return 'Cat B'.

// Function Description

// Complete the catAndMouse function in the editor below.

// catAndMouse has the following parameter(s):

// int x: Cat A's position
// int y: Cat B's position
// int z: Mouse C's position
// Returns

// string: Either 'Cat A', 'Cat B', or 'Mouse C'
//

function catAndMouse(x, y, z) {
    if(Math.abs(z-x) == Math.abs(y-z)){
        return 'Mouse C'
    }
    else if(Math.abs(z-x) < Math.abs(y-z)){
        return 'Cat A'
    }
    else{
        return 'Cat B'
    }

}