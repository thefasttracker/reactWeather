import React, {Component, PropTypes} from 'react'
import WeatherForm from 'WeatherForm'
import WeatherMessage from 'WeatherMessage'

export default class Weather extends Component {
	constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
		return(
			<div>
				<h3>Weather Component</h3>
				<WeatherForm />
				<WeatherMessage /> 
			</div>
		)
	}
}