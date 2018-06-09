import React, { Component } from 'react'
import ReactAnimatedWeather from 'react-animated-weather';

const sunny = {
    icon: 'CLEAR_DAY',
    color: 'yellow',
    size: 200,
    animate: true
  };
  
  const cloudy = {                                      
    icon: 'PARTLY_CLOUDY_DAY',
    color: 'blue',
    size: 200,
    animate: true
  };

  const rain = {
    icon: 'RAIN',
    color: 'blue',
    size: 200,
    animate: true
  }

export default class Display extends Component {
  constructor(props) {
    super(props)    //this.props = props
    this.state = {
      animationData : 
      { icon: '',
      color: '',
      size: 0,
      animate: false},
      hasrecieved : false
    }

    this.getanimation = this.getanimation.bind(this)
  }

getanimation() { 
  let animationData = this.state.animationData
if (this.props.id === 800) {
  animationData = sunny
} else if (this.props.id === 500 || this.props.id === 520 ) {
  animationData = rain
}  else if (this.props.id === 804 || this.props.id === 803 || this.props.id === 801 || this.props.id === 802) {
    animationData = cloudy
}
    this.setState({
    animationData: animationData,
    hasrecieved: true
  })
}

componentWillReceiveProps(nextProps) { 
  if (this.props !== nextProps) {
    this.setState(nextProps, this.getanimation)
  } else {
  this.getanimation()  
}
}
  render() {
    console.log(this.state)
    return (
        <div>
    { this.state.hasrecieved && <ReactAnimatedWeather
      icon={this.state.animationData.icon}
      color={this.state.animationData.color}
      size={this.state.animationData.size}
      animate={this.state.animationData.animate}
    />}
    </div>
    )
  }
}
