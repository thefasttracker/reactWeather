import ReactDOM from 'react-dom'
import React, {Component, PropTypes} from 'react'
import {Route, Router, IndexRoute, hashHistory} from 'react-router'
import Main from 'Main'

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			
		</Route>
	</Router>, 
	document.getElementById('app')
);