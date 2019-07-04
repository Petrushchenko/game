import React from 'react';
import cn from 'classnames';

const Field = (props) => {
	const {cells, markerPosition, onClick, endPosition, clickedCellIndex, gameRange} = props;

	return (
		<div className="field">
			{cells.map((cell, index) => (
				<div 
					className={cn("cell", `cell-${gameRange}`, {"correct": index === endPosition && clickedCellIndex !== null, "incorrect" : clickedCellIndex === index && clickedCellIndex !== endPosition})} 
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