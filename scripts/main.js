var React = require('react');
var ReactDOM = require('react-dom');
var data = require('./sample-projects');
/*
 * Project Component
 */

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 5, 2, 6, 1, 2, 3, 4, 5, 7, 8, 9] 

console.log('tests', data[0].title)

var Projects = React.createClass({
	render: function() {
		return (
			<div>
				{
					this.props.projects.map( (project) => <Project key={project.index} title={project.title} art={project.artwork} type={project.releaseType} artist={project.artist} tags={project.tag} release={project.releaseDate} /> )
				}
			</div>
		)
	}
})

var Project = React.createClass({
	// var pussy = 'this.props',

	render: function() {
		return (

			// <div className="square color-" + {Math.floor(Math.random()*9)+1} + " project">
			<div className="square color-9 project">
				<img src={this.props.art} alt="" className="project__artwork"/>
				<div className="project__meta">
					<div className="project__info">
						<h3 className="project__title">{this.props.title}</h3>
						<p className="project__artist">{this.props.artist}</p>
						<em>{this.props.release}</em>
					</div>
					<div className="project__tags">
						<i className="fa fa-usd"></i>
						<i className="fa fa-coffee"></i>
					</div>
				</div>
			</div>
		)
	}
});

var NavBar = React.createClass({
	render: function() {
		<h1>Navbar</h1>
	}
})

ReactDOM.render(
	<Projects projects={data}/>, 
	document.getElementById('insertHere')
);