import React from "react";
const Weather = props => (
    <div>
                {props.city &&
                <div className="infoWeath">
                    <p>Город: {props.city}</p>
                <p>Местоположение: {props.city}, {props.country}</p>
                <p>Температура: {props.temp}</p>
                <p>Давление: {props.sunrise}</p>
                <p>Закат солнца: {props.sunset}</p>
                </div>
                }
                <p className="error">{props.error}</p>
            </div>
)
export default Weather;