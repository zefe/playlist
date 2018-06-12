import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './media.css';

class Media extends Component{
	//con ECMScript6
	constructor(props){
		//lo manda llamar cuando nuestro componente se valla a renderear
		super(props)
		this.state = {
			author: props.author,
		}
		//this.handleClick = this.handleClick.bind(this);
	}
	//con ECM7 con arrow function add = y =>
	handleClick = (event) =>{
		//console.log(this.props.image)
		this.setState({
			author: "Rocio chio",
		})
	}
	render(){
		/*const styles = {
			container: {
				color: '#44546b',
				cursor: 'pointer',
				width: 260,
				border: 'solid 1px red'
			}
		} */
		return(
			<div className="Media" onClick={this.handleClick}>
				<div className=".Media-cover">
					<img
					src={this.props.cover}
					alt=""
					width={240}
					height={160}
					className="Media-image"
					/>
					<h3 className="Media-title">{this.props.title}</h3>
					<p className="Media-author">{this.props.author}</p>
				</div>
			</div>
			)
	}
}

//validamos propiedades
Media.propTypes = {
	cover: PropTypes.string,
	title: PropTypes.string.isRequired,
	author: PropTypes.string,
	type: PropTypes.oneOf(['video','audio']),
}

export default Media;