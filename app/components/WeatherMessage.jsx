import React, {Component} from 'react'

export default class WeatherMessage extends Component {
	constructor(props) {
    super(props)
  }
  
  render() {
  	let {location, temp} = this.props
  	return(
			<div>
				<p>It's {temp} in {location}.</p>
			</div>
		)
	}
};