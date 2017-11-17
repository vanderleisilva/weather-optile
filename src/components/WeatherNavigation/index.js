import React from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class WeatherCard extends React.Component {

	static propTypes = {		
		currentPage: PropTypes.number,
		totalPages: PropTypes.number
	}

	render() {
		const navigate = { up: parseInt(this.props.currentPage) + 1, down: parseInt(this.props.currentPage) - 1 }

		return(
			<div className="thumbnail">
                <Link title="Previews item" to={`/${navigate.down}`}  className="btn btn-default"> Preview </Link>
                <Link title="Next item" to={`/${navigate.up}`}  className="btn btn-default"> Next </Link>
	        </div>
		);
	}

}

export default WeatherCard;