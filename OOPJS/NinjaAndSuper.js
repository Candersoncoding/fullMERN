class Ninja{
    constructor(name, health = 100, speed = 3, strength = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName(){
        console.log(this.name)
    }

    showStats(){
        console.log(this.name, this.health, this.speed, this.strength)
    }

    drinkSake(){
        console.log('slluuuuurrp.....Your Health is now: '.concat(parseInt(this.health += 10)))
    }
}

class Sensei extends Ninja {
    constructor(name, health, speed, strength, wisdom){
        super(name, 200, 10, 10, 10);
    }

    speakWisdom(){
        this.drinkSake()
        console.log("You must think of what you say, ....... and then say it.")
    }
}

sensei1 = new Sensei("Jeni");
sensei1.showStats();
sensei1.speakWisdom();
sensei1.sayName();
sensei1.showStats();

// ninja1 = new Ninja("Charles");
// ninja1.sayName();
// ninja1.showStats();
// ninja1.drinkSake();