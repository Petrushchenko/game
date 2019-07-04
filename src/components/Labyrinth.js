import React, {Component} from 'react';
import Field from './Field';
import Arrows from './Arrows';
import Controls from './Controls';
import * as Helpers from '../utils/helpers';
import '../styles/main.scss';

class Labyrinth extends Component {
	state = {
		gameRanges: [3, 4, 5],
		gameRange:3,
		markerPosition: null,
		positions: [],
		endPosition: null,
		clickedCellIndex: null
	}

	setMarkerPosition = async () => {
		await this.setState({
			markerPosition: Math.floor(Math.random() * Math.pow(this.state.gameRange, 2) ),
			endPosition: null,
			clickedCellIndex: null,
			positions: [],
			transitionsCounter: 0
		});

		const positions = this.moveArrow(this.state.markerPosition, this.state.gameRange, 0);

		this.setState({
			positions: positions,
			endPosition: positions[positions.length - 1].position
		})

	}

	setGameRange = async ({value}) => {

		await this.setState({
			gameRange: +value,
			endPosition: null,
			clickedCellIndex: null,
			markerPosition: null,
			transitionsCounter: 0
		});
	}

	handleClick = (index) => {
		if(!this.state.markerPosition || this.state.transitionsCounter < Math.pow(this.state.gameRange, 2) + 1) {
			return;
		}

		this.setState({
			...this.state,
			positions: [],
			markerPosition: null,
			clickedCellIndex: index,
		});
	}

	moveArrow = (start, range, counter, res = []) => {
		let currentPosition = start;

		if (counter < Math.pow(range, 2) + 1) {
			let directions;
			switch (true) {
				case start === 0: 
					directions = ["down", "right"];
					break;
				case start < range -1:
					directions = ["down", "left", "right"];
					break;
				case start === range -1:
					directions = ["down", "left"];
					break;
				case start === Math.pow(range, 2) - 1:
					directions = ["up", "left"];
					break;
				case Helpers.firstColumnIndexes(range).includes(start):
					directions= ["up", "down", "right"];
					break;
				case Helpers.lastColumnIndexes(range).includes(start):
					directions= ["up", "down", "left"];
					break;
				case start === Math.pow(range, 2) - range:
					directions = ["up", "right"];
					break;
				case start >  Math.pow(range, 2) - range:
					directions = ["up", "right", "left"];
					break;
				default: directions = ["up", "down", "left", "right"];
			}
			const direction = Helpers.getDirection(directions);
			switch (direction) {
				case "left":
					currentPosition -= 1;
				break;
				case "right":
					currentPosition += 1;
					break;
				case "up":
					currentPosition -= range;
					break;
				default:
					currentPosition +=range;
			}
			res.push({direction, position: currentPosition});
			// console.log(direction, currentPosition)
				return this.moveArrow(currentPosition, range, counter+1, res);
		} else {
			return res;
		}
	}

	handleTr = () => {

		this.setState({
			transitionsCounter: this.state.transitionsCounter + 1
		})
	}

	render() {
		const { positions, gameRange, transitionsCounter, gameRanges, clickedCellIndex, markerPosition} = this.state;
		const cells =Array(Math.pow(gameRange, 2)).fill(null);
		return (
			<div>
				<Controls 
					onClick={this.setMarkerPosition}
					dropdownOption = { gameRanges }
					onDropdownChange = {this.setGameRange}
					currentGameRange = {this.state.gameRange}
					transitionsCounter = {transitionsCounter}
					gameRange = { Math.pow(gameRange, 2) + 1}
					isFieldClicked = { clickedCellIndex === null ? false : true }
					markerPosition = {markerPosition}
					/>
				<Field 
					cells={cells}
					onClick = {this.handleClick}
					{...this.state}
				/>
				<Arrows
					arrows={[...cells, null]} 
					positions={positions} 
					onTransitionEnd = {this.handleTr}
				/>
			</div>
		)
	}
}

export default Labyrinth;