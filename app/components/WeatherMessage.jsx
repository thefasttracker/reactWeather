import React, {Component} from 'react'

export default ({location, temp}) => {
	return(
		<div>
			<p>It's {temp} in {location}.</p>
		</div>
	)
};