/*
 * Project
 * <Project />
 */

import React from 'react';

var Project = React.createClass({
	render : function() {
		// var title = this.props.
		return (
			<li className="project">
				<img src="http://placehold.it/500" alt=""/ className="project__artwork">
				<div className="project__info">
					<h3>Artist Name</h3>
					<p>Project Name</p>
				</div>
			</li>
		)
	}
})