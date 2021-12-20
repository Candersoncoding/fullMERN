import React, {useState} from "react";

const PizzaForm = (props) =>{

    
    return(
        <div>
            <form >
                <div className="form-floating">
                    <input class="form-control" type="text" name="pizzaSize"></input>
                    <label htmlFor="pizzaSize">Size</label>
                </div>
                <div className="form-floating">
                    <input class="form-control" type="text" name="pizzaSize"></input>
                    <label htmlFor="pizzaCrust">Pizza Crust</label>
                </div>
                <div className="form-floating">
                    <input class="form-control" type="text" name="pizzaSize"></input>
                    <label htmlFor="pizzaCutStyle">Cut Style</label>
                </div>
                <div className="form-floating">
                    <h4 className="text-light">Select Your Cheezyness!</h4>
                    <input type="range" className="form-control-range col-12"></input>
                </div>
                <div className="form-floating">
                    <input class="form-control" type="text" name="pizzaSize"></input>
                    <label htmlFor="pizzaMeats">Meats</label>
                </div>
                <div className="form-floating">
                    <input class="form-control" type="text" name="pizzaSize"></input>
                    <label htmlFor="pizzaVeggies">Veggies</label>
                </div>
            </form>
        </div>
    )
}

export default PizzaForm;