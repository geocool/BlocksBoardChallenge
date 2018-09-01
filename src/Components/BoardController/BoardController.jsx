import React from "react";

import "./BoardController.css";

class BoardController extends React.Component {
	render() {
		return (
			<div className="BoardController">
				<div className="BoardController-inputbox">
					<label className="BoardController-inputLabel">Columns:</label> 
					<input 
					className="BoardController-inputNumber" 
					type="number" 
					min="1" 
					defaultValue="10"
					onChange={(event) => this.props.onColumnInputChange(event)}
					/>
				</div>
				<div  className="BoardController-inputbox">
					<label className="BoardController-inputLabel">Rows:</label>
					<input 
					className="BoardController-inputNumber" 
					type="number" 
					min="1" 
					defaultValue="10"
					onChange={(event) => this.props.onRowInputChange(event)}
					/>
				</div>

				<div className="BoardController-randomPattern">
					<label className="BoardController-inputLabel">Shift Pattern:</label>
					<input 
					type="checkbox" 
					className="BoardController-inputCheckbox" 
					onChange={(event) => this.props.onCheckboxInputChange(event)}
					/>
				</div>
			</div>
			);
	}
}

export default BoardController;