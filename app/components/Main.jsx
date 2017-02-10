import React, {Component, PropTypes} from 'react'
import Nav from 'Nav'
import Weather from 'Weather'

export default class Main extends Component {
	constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
		return(
			<div>
				<Nav />
				{this.props.children}
			</div>	
		)
	}
}