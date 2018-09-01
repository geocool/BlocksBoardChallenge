import React from "react";
import "./Board.css";
import BoardRow from "../BoardRow/BoardRow.jsx";

class Board extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			basePatternIndex : 0,
			patternShiftStarted: false,
			patternSwitchInterval: null,
		}
	}

	render() {
		return(
			<section className="Board">
				{this.renderBoard()}
			</section>
		);
	}

	renderBoard() {
		const board = [];
		let patternIndexCounter = this.state.basePatternIndex;

		for(let i=0; i < this.props.rows; i++) {
			board.push(<BoardRow key={i} colorShiftIndex={patternIndexCounter} columns={this.props.columns}/>);
			patternIndexCounter = patternIndexCounter === 0 ? 2 : patternIndexCounter-1;
		}

		return board;
	}

	componentDidUpdate() {
		if(this.props.shiftPattern && !this.state.patternShiftStarted) {
			this.changePatternPerSecondStart();
		} else if (!this.props.shiftPattern && this.state.patternShiftStarted) {
			this.changePatternPerSecondStop();
		}
	}

	changePatternPerSecondStart() {
		let patternSwitchInterval = setInterval(() => {
			let patternIndexCounter = this.state.basePatternIndex;
			patternIndexCounter = patternIndexCounter === 0 ? 2 : patternIndexCounter-1;
			this.setState({basePatternIndex: patternIndexCounter})
		}, 1000);

		this.setState({
			patternShiftStarted:true,
			patternSwitchInterval: patternSwitchInterval,
		});
	}

	changePatternPerSecondStop() {
		clearInterval(this.state.patternSwitchInterval);

		this.setState({
			patternShiftStarted:false,
			patternSwitchInterval: null,
		});
	}
}

export default Board;