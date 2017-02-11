import React, {Component} from 'react'

export default class WeatherForm extends Component {
	constructor(props) {
    super(props)
  }

  onFormSubmit = (e) => {
    if (e) e.preventDefault()

    let location = this.refs.location.value
    if (location.trim().length > 0) {
      this.props.onSearch(location)
    }
    this.refs.location.value = ""
  }
  
  render() {
		return(
			<div>
				<form onSubmit={this.onFormSubmit }>
					<input type="text" ref="location" placeholder="Enter location"/>
					<button>Get Weather</button>
				</form>
			</div>
		)
	}
 };