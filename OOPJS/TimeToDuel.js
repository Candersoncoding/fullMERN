class Card{
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card{
    constructor(name, cost, power, resilience){
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
    }

    attack(target){
        console.log(`${this.name} attacks ${target.name}`)
        console.log(`${target.name} now has ${target.resilience-this.power} resilience.`)
    }
}
class Effect extends Card{
    constructor(name, cost, stat, magnitude){
        super(name, cost)
        this.text = "";
        this.stat = stat;
        this.magnitude = magnitude;
    }

    play(target){
        if(target instanceof Unit){

            if(this.magnitude < 0){
                this.text += "Lower";
            }
            else if(this.magnitude > 0){
                this.text += "Raise";
            }
            else{
                throw new Error("Magnitude is 0 and does nothing.")
            }

        this.text += " the target's ";

            if(this.stat == "resilience"){
                target.resilience += this.magnitude;
                this.text += `resilience by ${Math.abs(this.magnitude)}.`;
            }
            else if(this.stat == "power"){
                target.power += this.magnitude;
                this.text += `power by ${Math.abs(this.magnitude)}.`;
            }

        console.log(this.text);

        }
        else{
            throw new Error("Only Unit Cards can be attacked or effected.");
        }
    }
    
}
// Effects have a property "text" and target a unit's "stat" by increasing or decreasing it by the EffectCard's "magnitude".
// Unit attacking Unit = target's resilience - the attacker's power.

ninjaRed = new Unit("Red Belt Ninja", 3, 3, 4);
ninjaBlack = new Unit("Black Belt Ninja", 4, 5, 4);

algo1 = new Effect("Hard Algorithm", 2, "resilience", 3);
algo1.play(ninjaRed)

unhandPromise = new Effect("Unhandled Promise Rejection", 1 , "resilience", -2);
unhandPromise.play(ninjaRed);

pairPrograming = new Effect("Paired Programming", 3, "power", 2);
pairPrograming.play(ninjaRed);

ninjaRed.attack(ninjaBlack);
