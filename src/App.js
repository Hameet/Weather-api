import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import Titles from './components/Titles'
import Form from './components/Form'
import Weather from './components/Weather'
import Display from './components/Display'


const API_KEY = "c1891d3950ee986634407066ad151b06"

class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
    
  }

  getWeather = async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value


    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
    const data = await api_call.json()
    console.log(data)

    if (city && country) {this.setState({
      temperature: data.main.temp,
      city:data.name,
      country:data.sys.country,
      humidity:data.main.humidity,
      wind:data.wind.speed,
      description:data.weather[0].description
    })
  }
}
  render() {
    return (
      <div className="App">
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">MADE WITH REACT</h1>
            </header>    
        <div>
          <div className="wrapper">
            <div className="main">
              <div className="container">
                <div className="row">
                  <div className="col-xs-5 title-container">
                    <Display
                    temperature={this.state.temperature}
                    />
                  </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather}/>
                  <Weather 
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    wind={this.state.wind}
                    description={this.state.description} 
                    error={this.state.error}       
                    />
                </div>
              </div> 
            </div>
          </div>
        </div>



        
        
      </div> 
      </div>
    );
  }
}

export default App;

          