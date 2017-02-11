import React, {Component, PropTypes} from 'react'
import WeatherForm from 'WeatherForm'
import WeatherMessage from 'WeatherMessage'
import openWeatherMap from 'openWeatherMap'

export default class Weather extends Component {
	constructor(props) {
    super(props);
    this.state = {
    	location: 'Miami',
    	temp: 35
    }
  } 

  handleSearch = (location) => {
  	let that = this
  	openWeatherMap.getTemp(location).then(function (temp){ 
  		that.setState({
  			location,
  			temp 
  		})
  	}, function (err){
  			alert(err)
  	})
  }

  render() {
  	let {location, temp} = this.state
		return(
			<div>
				<h3>Weather Component</h3>
				<WeatherForm onSearch={this.handleSearch}/>
				<WeatherMessage location={location} temp={temp}/> 
			</div>
		)
	}
}