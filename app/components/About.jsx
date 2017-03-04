import React, {Component, PropTypes} from 'react'

export default (props) => {
  return(
  		<div>
  			<h1 className="text-center page-title">About</h1> 
			<p>This is a weather app on React</p>
			<p>Here some tools I used:</p>
			<ul>
				<li>
					<a href="https://facebook.github.io/react">React</a> - JavaScript library
				</li>
				<li>
					<a href="http://openweathermap.org">Open Weather Map</a> - Weather data by city name
				</li>
			</ul>
  		</div>
	)
}