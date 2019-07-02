import React from 'react';
import cn from 'classnames';

const Arrows = (props) => {
	const { arrows, positions} = props;

	return (
		<div className="arrows">
			{arrows.map((arrow, index) => {
				return (
					<div 
						className={cn("arrow", {
							"arrow-down" : positions.length && positions[index].direction === "down",
							"arrow-left" : positions.length && positions[index].direction === "left",
							"arrow-up" : positions.length && positions[index].direction === "up",
							"arrow-right" : positions.length && positions[index].direction === "right",
							[`arrow-${index }`] : true
							})} 
						key={index}></div>)
				})
			}
		</div>
		)
}

export default Arrows;