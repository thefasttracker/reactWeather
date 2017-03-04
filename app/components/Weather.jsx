import React, {Component, PropTypes} from 'react'
import WeatherForm from 'WeatherForm'
import WeatherMessage from 'WeatherMessage'
import openWeatherMap from 'openWeatherMap'
import ErrorModal from 'ErrorModal' 

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
  		isLoading:true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined
  	})

  	openWeatherMap.getTemp(location).then(function (temp){
  		that.setState({
  			location,
  			temp,
  			isLoading: false 
  		})
  	}, function (e){
  			that.setState({
  				location: null,
  				temp: null,
  				isLoading: false,
          errorMessage: e.message
        })  
  	})
  }

  componentDidMount() {
    let location = this.props.location.query.location
    if (location && location.length > 0) {
      this.handleSearch(location)
      window.location.hash = '#/'
    }
  }

  componentWillReceiveProps(newProps) {
    let location = newProps.location.query.location
    if (location && location.length > 0) {
      this.handleSearch(location)
      window.location.hash = '#/'
    }
  }

  render() {
  	let {isLoading, location, temp, errorMessage} = this.state
  
  	function renderMessage() { 
  		if (isLoading) {
  			return <h3 className="text-center">fetching weather...</h3>
  		} else if (location && temp) {
  			return <WeatherMessage location={location} temp={temp}/>
  		}
  	}

    function renderError() {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
    }
		
		return(
			<div>
				<h1 className="text-center page-title">Get Weather</h1>
				<WeatherForm onSearch={this.handleSearch}/>
				{renderMessage()}
        {renderError()} 
			</div>
		)
	}
}