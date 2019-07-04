import React from 'react';
import Select from 'react-select';
import { getDropdownOptions } from '../utils/helpers';

const customStyles = {
	control: (styles, {isDisabled}) => ({ ...styles, backgroundColor: 'white', borderColor: isDisabled ? "#808080" : "#8145d3", width: "250px" , outline: "none", color:"#c945d3" }),
	option: (styles, { data, isDisabled, isFocused, isSelected }) => {
		return {
			...styles,
			backgroundColor: isDisabled
			? null
			: isSelected
			? data.color
			: isFocused
			? "#f1eafa"
			: null,
			color: isDisabled
			? '#ccc'
			: isSelected
			? data.color
			: null,
			cursor: isDisabled ? 'not-allowed' : 'default',

			':active': {
			...styles[':active'],
			backgroundColor: !isDisabled && (isSelected ? data.color : "#8145d3"),
			},
		};
	},
	input: styles => ({ ...styles, borderColor: "#8145d3"}),
	dropdownIndicator: styles => ({...styles, color: "#8145d3"}),
	placeholder: styles => ({ ...styles }),
	singleValue: (styles, ) => ({ ...styles, color: "#c945d3"}),
	menuList: styles => ({...styles, borderColor: "#c945d3"})
};

const Controls = (props) => {
	const { onClick, dropdownOption, onDropdownChange, currentGameRange, transitionsCounter, gameRange, isFieldClicked, markerPosition} = props;

	return (
		<div className="controls">
			<button 
				onClick={onClick}
				disabled = {markerPosition && transitionsCounter < gameRange ? true : false}
			>
				start game
			</button>
			<Select
				value={currentGameRange}
				onChange={onDropdownChange}
				options={getDropdownOptions(dropdownOption)}
				styles={customStyles}
				placeholder ="Choose the game range"
				defaultValue = {currentGameRange}
				hideSelectedOptions = {false}
				isDisabled = { markerPosition && (transitionsCounter < gameRange || !isFieldClicked )? true : false }
			/>
			
		</div>
	)
}

export default Controls;

