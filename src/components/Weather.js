import React from "react";
const Weather = props => (
    <div>
                {props.city &&
                <div>
                    <p>Город: {props.city}</p>
                <p>Местоположение: {props.city}, {props.country}</p>
                <p>Температура: {props.temp}</p>
                <p>Давление: {props.sunrise}</p>
                <p>Закат солнца: {props.sunset}</p>
                </div>
                }
                <p>{props.error}</p>
            </div>
)
export default Weather;