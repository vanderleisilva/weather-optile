import PropTypes from 'prop-types';

export const weatherCardType = PropTypes.shape({
	code: PropTypes.string,
	date: PropTypes.string,
	day: PropTypes.number,
	high: PropTypes.number,
	low: PropTypes.number,
	text: PropTypes.string
});