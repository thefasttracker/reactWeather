import ReactDOM from 'react-dom'
import React, {Component, PropTypes} from 'react'
import {Route, Router, IndexRoute, hashHistory} from 'react-router'
import Main from 'Main'
import Weather from 'Weather'
import About from 'About'
import Examples from 'Examples'
import 'style!css!foundation-sites/dist/css/foundation.min.css'

$(document).foundation();

//app css
import 'style!css!applicationStyles'

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<Route path="about" component={About}/>
			<Route path="examples" component={Examples}/>
			<IndexRoute component={Weather}/>
		</Route>
	</Router>, 
	document.getElementById('app')
);