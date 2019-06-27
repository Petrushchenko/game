import React from 'react';

const Field = (props) => {
	const {cells, markerPosition} = props;
	// console.log(markerPosition)
	return (
		<div className="field">
			{cells.map((cell, index) => <div className="cell" key={index}>
				{markerPosition === index && <div className="marker"></div>}
				</div>)
			}
			
	</div>
	)
}

export default Field;