import React from "react";
import "./BoardRow.css"
import Square from "../Square/Square.jsx";

class BoardRow extends React.Component {
	render() {
		return(
				<div className="BoardRow">
					{this.renderRow()}
				</div>
		);
	}

	renderRow() {
		const boardRow = [];
		let patternIndexCounter = this.props.colorShiftIndex;

		for(let i=0; i<this.props.columns; i++) {
			boardRow.push(<Square key={i} colorIndex={patternIndexCounter.toString()} />);
			patternIndexCounter = patternIndexCounter === 2 ? 0 : patternIndexCounter+1;
		}

		return boardRow;
	}
}

export default BoardRow;