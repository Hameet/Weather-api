import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';
 
const defaults = {
  icon: 'CLEAR_NIGHT',
  color: 'red',
  size: 200,
  animate: true
};
 
const Animate = () => (
  <ReactAnimatedWeather
    icon={defaults.icon}
    color={defaults.color}
    size={defaults.size}
    animate={defaults.animate}
  />
);
 
export default Animate;

