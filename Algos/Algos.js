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

/*
 * Complete the 'bonAppetit' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY bill
 *  2. INTEGER k an integer representing the index of the item Anna doesn't eat
 *  3. INTEGER b  the amount of money that Anna contributed to the bill
 * n = the length of the bill array
 * calculate half of the bill, then calculate the difference between half of the bill and what Anna owes
 */

function bonAppetit(bill, k, b) {
    const halfer = (prev, curr) => prev + curr;
    let newArr = [];
    for(let i = 0; i < bill.length; i++){
        (i == k) ? 'cool' : newArr.push(bill[i]);
    }
    (b-(newArr.reduce(halfer)/2)) == 0 ? console.log('Bon Appetit') : console.log(b-(newArr.reduce(halfer)/2))  


}

// A video player plays a game in which the character competes in a hurdle race. Hurdles are of varying heights, and the 
// characters have a maximum height they can jump. There is a magic potion they can take that will increase their maximum 
// jump height by 1 unit for each dose. How many doses of the potion must the character take to be able to jump all of the 
// hurdles. If the character can already clear all of the hurdles, return 0.

// Example

// height = [1,2,3,3,2]
// k=1

// The character can jump 1 unit high initially and must take 3-1=2 doses of potion to be able to jump all of the hurdles.

// Function Description

// Complete the hurdleRace function in the editor below.

// hurdleRace has the following parameter(s):

// int k: the height the character can jump naturally
// int height[n]: the heights of each hurdle
// Returns

// int: the minimum number of doses required, always  or more

// couple different solutions

function hurdleRace(k, height) {
    // Write your code here
    console.log(k)
    console.log(height)
    let potion = 0;
    let temp = Math.max(...height);
    // for(let i = 0; i < height.length; i++){
    //        temp = height[i]-k;
    //     if(temp > potion){
    //         potion = temp;
    //     }
    //     else{
    //         console.log("you got this");
    //     }
    // }
    return temp > k ?  temp-k : potion; 
    
}

// A Discrete Mathematics professor has a class of students. 
// Frustrated with their lack of discipline, the professor decides 
// to cancel class if fewer than some number of students are present when class starts. 
// Arrival times go from on time (arrivalTime <= 0) to arrived late (arrivalTime > 0).

// Given the arrival time of each student and a threshhold number of attendees, determine if the class is cancelled.

// Example n=5, k=3, a =[-2,-1,0,1,2]

// The first 3 students arrived on. The last 2 were late. 
// The threshold is 3 students, so class will go on. Return YES.

// Note: Non-positive arrival times (a[i] <= 0) indicate the student arrived early or on time; 
// positive arrival times (a[i > 0]) indicate the student arrived a[i] minutes late.

// Function Description

// Complete the angryProfessor function in the editor below. It must return YES if class is cancelled, or NO otherwise.

// angryProfessor has the following parameter(s):

// int k: the threshold number of students
// int a[n]: the arrival times of the n students
// Returns

// string: either YES or NO

function angryProfessor(k, a) {
    // Write your code here
    return ((a.filter(num => num <= 0).length >= k ? 'NO' : 'YES'))
    
}

// or

function angryProfessor(k, a) {
    // Write your code here
    let onTime = []
    for(let i = 0; i < a.length; i++){
        if(a[i]<=0){
            onTime.push(a[i])
        }
    }
    console.log(onTime)
    return (onTime.length >= k ? 'NO' : 'YES')

}

// HackerLand Enterprise is adopting a new viral advertising strategy. When they launch a new product, they advertise it to exactly 5 people on social media.
// On the first day, half of those 5 people (i.e., floor(5/2) ) like the advertisement and each shares it
// with 3 of their friends. At the beginning of the second day, floor(5/2)*3 = 2*3 = 6 people receive the advertisement.

// Each day, floor(recipients/2) of the recipients like the advertisement and will share it with 3 friends on the following day. 
// Assuming nobody receives the advertisement twice, determine how many people have liked the ad by the end
//  of a given day, beginning with launch day as day 1.

function viralAdvertising(n) {
    // Write your code here
    let day = n;
    let shared = 5;
    let liked = 0;
    let cumulative = 0;
    for(let i = 0; i < day; i++){
        liked = Math.floor(shared/2);
        shared = (liked * 3);
        cumulative+=liked;
        console.log(cumulative, shared, liked);
        
    }
    return cumulative;

}
