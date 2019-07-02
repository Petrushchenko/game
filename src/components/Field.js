import React from 'react';
import cn from 'classnames';

const Field = (props) => {
	const {cells, markerPosition, onClick, endPosition, clickedCell} = props;

	return (
		<div className="field">
			{cells.map((cell, index) => (
				<div 
					className={cn("cell", {"correct": index === endPosition, "incorrect" : clickedCell === index && clickedCell !== endPosition})} 
					key={index} 
					onClick={() => onClick(index)}
				>
					{markerPosition === index && <div className="marker"></div>}
				</div>))
			}
			
	</div>
	)
}

export default Field;