import React from 'react'
import ReactAnimatedWeather from 'react-animated-weather';

const defaults = {
  icon: 'CLEAR_NIGHT',
  color: 'red',
  size: 200,
  animate: true
};

 const Weather = props => {
    
        return (
            <div className="weather__info">
              {
                props.city && props.country && <p className="weather__key">Location:
                    <span className="weather__value"> {props.city}, {props.country}</span></p>
                }
              {
                props.temperature && <p className="weather__key">Temperature:
                    <span className="weather__value"> {props.temperature}</span>
                 </p>
                }
              {
                props.humidity &&  <p className="weather__key">Humidity: 
                    <span className="weather__value"> {props.humidity}</span>
                  </p>
                }

                {
                props.wind &&  <p className="weather__key">Wind: 
                    <span className="weather__value"> {props.wind}</span>
                  </p>
                }

              {
                props.description && <p className="weather__key">Conditions:
                    <span className="weather__value"> {props.description}</span>
                    </p>
                }
            </div>
         
        )
}

    export default Weather