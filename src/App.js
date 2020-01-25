import React from "react";
import Info from "./components/Info";
import Form from "./components/Form";
import Weather from "./components/Weather";
const API_KEY = "f9b001589d96b792e00bebfe7f0c5aae"
class App extends React.Component {
    state = {
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        sunset: undefined,
        error: undefined
    }
    gettingWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        if(city) {
            const api_url = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appId=f9b001589d96b792e00bebfe7f0c5aae&units=metric`);
        const data = await api_url.json();
        let sunset = data.sys.sunset;
        let date = new Date();
        date.setTime(sunset);
        var sunset_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
            this.setState({
            temp: data.main.temp,
            city: data.name,
            country: data.sys.country,
            pressure: data.main.pressure,
            sunset: sunset_date,
            error: " "
        });
        }
        else {
            this.setState({
                temp: undefined,
                city: undefined,
                country: undefined,
                pressure: undefined,
                sunset: undefined,
                error: "Введите название города"
            });
        }
    }
    render() {
        return (
            <div className="wrapper">
                <div className="main">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-5 info"><Info/></div>
                        <div className="col-sm-7 form">
                        <Form weatherMethod={this.gettingWeather}/>
                <Weather temp={this.state.temp}
                city={this.state.city}
                country={this.state.country}
                sunrise={this.state.pressure}
                sunset={this.state.sunset}
                error={this.state.error}/>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
    
};
export default App;