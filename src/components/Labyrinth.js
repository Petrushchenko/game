import React, {Component} from 'react';
import Field from './Field';

class Labyrinth extends Component {
	state = {
		gameRange:3,
		markerPosition: null
	}
	setMarker =() => {
		this.setState((prevState) => ({
			...prevState, 
			markerPosition: Math.floor(Math.random() * (Math.pow(prevState.gameRange, 2) + 1))
		}))
	}
	render() {
		const {gameRange, markerPosition} = this.state;
		return (
			<div>
				<Field range={gameRange}/>
				<button onClick={this.setMarker}>set marker ({markerPosition})</button>
			</div>
		)
	}
}

export default Labyrinth;