import React from 'react';

const Field = (props) => {
	const {range} = props;
	const cells = Array(Math.pow(range, 2)).map((cell, index) => <div className="cell" key={index}></div>)
	return (
		<div className="field">
		{cells.length}
		</div>
	)
}

export default Field;