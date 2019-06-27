import React from 'react';

const Arrows = (props) => {
	console.log(props)
	const { arrows } = props
	return (
		<div className="arrows">
			{arrows.map((arrow, index) => <div className="arrow" key={index}></div>)}
		</div>
		)
}

export default Arrows;