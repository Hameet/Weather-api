    import React, { Component } from 'react'
    import ReactAnimatedWeather from 'react-animated-weather';

    const sunny = {
        icon: 'CLEAR_DAY',
        color: 'red',
        size: 200,
        animate: true
      };
      
      const cloudy = {                                      
        icon: 'PARTLY_CLOUDY_DAY',
        color: 'blue',
        size: 200,
        animate: true
      };

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
    if (this.props.temperature > 1) {
      animationData = sunny
    } else {
     animationData = cloudy
     console.log('ffff', this.state)
    }
        this.setState({
        animationData: animationData,
        hasrecieved: true
      })
    }

    componentWillReceiveProps(nextProps) { 
    console.log('comp', nextProps)
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
