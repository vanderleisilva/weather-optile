import React from "react";
import PropTypes from 'prop-types';
import WeatherCard from "../WeatherCard";

class WeatherList extends React.Component {

	static propTypes = {
		weatherCards: PropTypes.arrayOf(PropTypes.object),
		currentPage: PropTypes.number
	}

	render() {
		const pageIndex = this.props.currentPage - 0;
		const pagesPerPage = 3;
		const initialValue = pageIndex * pagesPerPage;

	    const itens = this.props.weatherCards.filter((item, index) => index >= initialValue && index < initialValue + pagesPerPage)
	    .map((item, index) =>
            <div key={index} className="col-md-3">
                <WeatherCard item={item} />
            </div>
        );
	    
		return(
			<div className="row">
	            {itens}
	        </div>
		);
	}

}

WeatherList.defaultProps = {
    weatherCards: [],
    currentPage: 1
};

export default WeatherList;