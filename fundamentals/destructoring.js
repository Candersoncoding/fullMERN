var flavors = ["Mint chocolate", "vanilla", "sherbet", "pistachio"];


if(flavors.length > 3){
        var toppings = ["hot fudge", "jelly beans", "cinnamon sugar", "rainbow spranks"];     
}

const faveToppings = ["pecans", ...toppings]  // declaring the variable and setting the value to the object or array that you are adding to. This is using spread. Packaging. 

const sundae = {
    "iceCream" : "vanilla",
    "toppings" : toppings,
    "cherry" : true
}

// const [...a] = toppings; // destructuring assigns new varible first then sets it equal to the object or array that you pulling from. This is using rest. Destructuring uses rest. Unpackaging.
// console.log(first);
// console.log(second);
// console.log(...a);
// console.log(toppings);


// const {iceCream} = sundae; //allows us to pull out keys:value pairs from an array or object and assigns it to it's own variable

// console.log(iceCream);
// console.log(sundae);