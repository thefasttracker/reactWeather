 import React, {Component} from 'react'
 import ReactDOM from 'react-dom'
 import ReactDOMServer from 'react-dom/server'

export default class ErrorModal extends Component {
	static defaultProps: {
  		title: 'Error'
	}

	static propTypes: {
		title: React.PropTypes.string,
		message: React.PropTypes.string.isRequired
	}

	componentDidMount(){
		let {title, message} = this.props
		let modalMarkup = (
			<div id="error-modal" className="reveal tiny text-center" data-reveal="">
				<h4>{title}</h4>
				<p>{message}</p>
				<p>
					<button className="button hollow" data-close=""> 
						Ok
					</button>
				</p>
				
			</div>
		)

		let $modal = $(ReactDOMServer.renderToString(modalMarkup))
		$(ReactDOM.findDOMNode(this)).html($modal)
		
		let modal = new Foundation.Reveal($('#error-modal'))
		modal.open()
	} 
	render() {
		
		return (
			<div>
			</div>
			
		)
	}
}