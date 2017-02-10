import React, {Component} from 'react'

export default class WeatherForm extends Component {
	constructor(props) {
    super(props)
  }
  
  render() {
		return(
			<div>
				<form>
					<input type="text" ref="city" placeholder="Enter city"/>
					<button>Get Weather</button>
				</form>
			</div>
		)
	}
 };