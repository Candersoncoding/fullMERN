import React, {useState} from "react";

const PizzaForm = (props) =>{

    
    return(
        <div className="pizzaFormContainer p-5 m-5 bg-dark rounded">
            <form>
                <h1 className="text-primary mb-5">Build a Pizza!</h1>
                <div className="form-floating m-3">
                    <input class="form-control" type="text" placeholder="Default Input" name="pizzaSize"></input>
                    <label htmlFor="floatingpizzaSize">Size</label>
                </div>
                <div className="form-floating m-3">
                    <input class="form-control" type="text" placeholder="Default Input" name="pizzaCrust"></input>
                    <label htmlFor="floatingpizzaCrust">Pizza Crust</label>
                </div>
                <div className="form-floating m-3">
                    <input class="form-control" type="text" placeholder="Default Input" name="pizzaCutStyle"></input>
                    <label htmlFor="floatingpizzaCutStyle">Cut Style</label>
                </div>
                <div className="form-floating m-3">
                    <h4 className="text-light">Select Your Cheezyness!</h4>
                    <input type="range" className="form-control-range col-12"></input>
                </div>
                <div className="form-floating m-3">
                    <input class="form-control" type="text" placeholder="Default Input" name="pizzaMeats"></input>
                    <label htmlFor="floatingpizzaMeats">Meats</label>
                </div>
                <div className="form-floating m-3">
                    <input class="form-control" type="text" placeholder="Default Input" name="pizzaVeggies"></input>
                    <label htmlFor="floatingpizzaVeggies">Veggies</label>
                </div>
            </form>
        </div>
    )
}

export default PizzaForm;