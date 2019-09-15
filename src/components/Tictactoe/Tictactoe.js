import React, {Component} from 'react';
import Square from './Square';

export default class Tictactoe extends Component {
  render() {
    return (
      <React.Fragment>
        <h3>Welcome to TicTacToe game</h3>
        <div className="game-row">
          <Square key="0" squareId="0" />
          <Square key="1" squareId="1" />
          <Square key="2" squareId="2" />
        </div>
        <div className="game-row">
        <Square key="3" squareId="3" />
        <Square key="4" squareId="4" />
        <Square key="5" squareId="5" />
        </div>
        <div className="game-row">
        <Square key="6" squareId="6"/>
        <Square key="7" squareId="7"/>
        <Square key="8" squareId="8"/>
        </div>
      </React.Fragment>
    )
  }
}