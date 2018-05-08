import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';
 
const sunny = {
  icon: 'PARTLY_CLOUDY_DAY',
  color: 'red',
  size: 200,
  animate: true
};
 
const cloudy = {                                      
  icon: 'CLEAR_DAY',
  color: 'blue',
  size: 200,
  animate: true
};

const Animate = props => {
  let animationData = []
     if (props.city && props.country && props.temperature > 3) {
      return animationData = sunny
     } else {
      animationData = cloudy
}
  

console.log(animationData)
  return (
    <div>
      {/* {
        props.temperature && <p >Temperature:
         {props.temperature} </p>
         if {props.temperature} > 32 
      } */}
    
  
  <ReactAnimatedWeather
    icon={animationData.icon}
    color={animationData.color}
    size={animationData.size}
    animate={animationData.animate}
  />
  </div>
  )
};
 
export default Animate;

