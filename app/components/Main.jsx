import ReactDOM from 'react-dom'
import React, {Component, PropTypes} from 'react'
import Nav from 'Nav'

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
				<h2>Main Component</h2> 
			</div>	
		)
	}
}