import React from 'react';
import "./Square.css";

class Square extends React.Component {
	render() {
		return (
				<div 
				className="Square" 
				colorindex={this.props.colorIndex.toString()}
				>
					<div className="Square-content">
						<div className="Square-text">{this.renderColorName()}</div>
					</div>
				</div>
			);
	}

	renderColorName() {
		switch(this.props.colorIndex) {
			case "0":
				return "Purple";
			case "1":
				return "Yellow";
			case "2":
				return "Grey";
			default:
				 return "Unknown";
		}
	}
}

export default Square;