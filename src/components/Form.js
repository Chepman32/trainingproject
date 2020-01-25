import React from "react";
const Form = props => (
    <form onSubmit={props.weatherMethod}>
                <input type="text" name="city" placeholder="Город"/>
                <button><h2>Get weather</h2></button>
            </form>
)
export default Form;