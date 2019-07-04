export const firstColumnIndexes = (range) => {
	return Array.from({length: Math.pow(range, 2)}, (v, i) => i).filter(item => (item) % range === 0 && item < Math.pow(range, 2) - range && item > range - 1);
};
export const lastColumnIndexes = (range) => {
	return Array.from({length: Math.pow(range, 2)}, (v, i) => i).filter(item => (item + 1 - range ) % range === 0 && item < Math.pow(range, 2) && item > range - 1);
}
export const getDirection = (ar) => {
		const index = Math.floor(Math.random() * ar.length);
		return ar[index];
	} 

export const getDropdownOptions = (ar) => ar.map(item => ({label: `${item}`, value: `${item}`}));