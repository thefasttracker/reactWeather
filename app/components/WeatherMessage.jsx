import React, {Component} from 'react'

export default ({location, temp}) => {
	return(
		<div className="text-center">
			<p>It's {temp} in {location}.</p>
		</div>
	)
};