import React, {Component, PropTypes} from 'react'
import WeatherForm from 'WeatherForm'
import WeatherMessage from 'WeatherMessage'
import openWeatherMap from 'openWeatherMap'

export default class Weather extends Component {
	constructor(props) {
    super(props);
    this.state = {
    	isLoading: false
    }
  } 

  handleSearch = (location) => {
  	let that = this
  	this.setState({
  		isLoading:true
  	})

  	openWeatherMap.getTemp(location).then(function (temp){
  		that.setState({
  			location,
  			temp,
  			isLoading: false 
  		})
  	}, function (err){
  			that.setState({
  				location: null,
  				temp: null,
  				isLoading: false})
  			alert(err)
  	})
  }

  render() {
  	let {isLoading, location, temp} = this.state
  
  	function renderMessage() { 
  		if (isLoading) {
  			return <h3>fetching weather...</h3>
  		} else if (location && temp) {
  			return <WeatherMessage location={location} temp={temp}/>
  		}
  	}
		
		return(
			<div>
				<h3>Weather Component</h3>
				<WeatherForm onSearch={this.handleSearch}/>
				{renderMessage()} 
			</div>
		)
	}
}