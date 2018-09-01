import React, { Component } from 'react';
import './App.css';
import Board from "./Components/Board/Board.jsx";
import BoardController from "./Components/BoardController/BoardController.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boardRows : 10,
      boardColumns : 10,
      shiftPattern : false,
    }
  }

  render() {
    return (
      <div className="App">
      
        <header className="App-header">
          <h1>Blocks Board Challenge</h1>
          <h4>Challenge accomplished with React by George Sofianos</h4>
          <section className="App-challengePoints">
            <h3>Challenge Points</h3>
            <ul className="App-description">
              <li>A dynamic board with relative size to page width. Board contains blocks with 5px spacing </li>
              <li>A [Purple, Yellow, Grey] color pattern blocks. Each row shifts the pattern by one. </li>
              <li>An onHover rotation with a backside element that contains the color's name centered </li>
              <li>A Shift color pattern per second action. </li>
              <li>Controls with positive number validation </li>
            </ul>
          </section>
        </header>

        <BoardController 
        onRowInputChange={(event) => this.handleRowInputChange(event)} 
        onColumnInputChange={(event) => this.handleColumnsInputChange(event)}  
        onCheckboxInputChange={(event) => this.handleCheckboxInputChange(event)}
        />
        <Board 
        rows={this.state.boardRows} 
        columns={this.state.boardColumns}
        shiftPattern={this.state.shiftPattern}
        />
      </div>
    );
  }

  handleRowInputChange(event) {
    let input = event.target.value;

    if(input > 0) {
      this.setState({boardRows:input});
    }
  }

  handleColumnsInputChange(event) {
    let input = event.target.value;

    if(input > 0) {
      this.setState({boardColumns:input});
    }
  }

  handleCheckboxInputChange(event) {
    let input = event.target.checked;
    this.setState({shiftPattern:input});
  }
}

export default App;
