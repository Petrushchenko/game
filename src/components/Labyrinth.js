import React, {Component} from 'react';
import Field from './Field';
import Arrows from './Arrows';
import '../styles/main.scss';

class Labyrinth extends Component {
	state = {
		gameRange:3,
		markerPosition: null,
		positions: []
	}

	setMarkerPosition =() => {
		this.setState((prevState) => ({
			...prevState, 
			markerPosition: Math.floor(Math.random() * Math.pow(prevState.gameRange, 2) )
		}));
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
				case firstColumnIndexes(range).includes(start):
					directions= ["up", "doun", "right"];
					break;
				case lastColumnIndexes(range).includes(start):
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
			const direction = getDirection(directions);
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
			console.log(direction, currentPosition)
				return this.moveArrow(currentPosition, range, counter+1, res);
		} else {
			return res;
		}
	}
	componentDidUpdate(prevProps, prevState) {

		if (prevState.positions.length === 0 && prevState.positions === this.state.positions) {
			console.log(prevState.positions.length)
			this.setState((prevState) => ({
				...prevState, 
				positions: [...this.moveArrow(this.state.markerPosition, this.state.gameRange, 0)]
			}));
		}
		console.log(this.state.positions)

	}

	render() {
		const {gameRange, markerPosition, positions} = this.state;
		const cells = Array(Math.pow(gameRange, 2)).fill(null);
		return (
			<div>
				<Field cells={cells} markerPosition={markerPosition}/>
				<button onClick={this.setMarkerPosition}>set marker ({markerPosition})</button>
				<Arrows arrows={[...cells, null]} positions={positions}/>
			</div>
		)
	}
}
const firstColumnIndexes = (range) => {
	return Array.from({length: Math.pow(range, 2)}, (v, i) => i).filter(item => (item) % range === 0 && item < Math.pow(range, 2) - range && item > range - 1);
};
const lastColumnIndexes = (range) => {
	return Array.from({length: Math.pow(range, 2)}, (v, i) => i).filter(item => (item + 1 - range ) % range === 0 && item < Math.pow(range, 2) && item > range - 1);
}
const getDirection = (ar) => {
		const index = Math.floor(Math.random() * ar.length);
		return ar[index];
	} 

export default Labyrinth;