import React, {Component} from 'react'

export default class WeatherMessage extends Component {
	constructor(props) {
    super(props)
  }
  render() {
  	return(
			<div>
				<p>It's 40 in Philadelfia.</p>
			</div>
		)
	}
};