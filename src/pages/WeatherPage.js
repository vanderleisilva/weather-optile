import React from "react";
import dummyData from '../dummy-data/forecast.js';
import WeatherList from '../components/WeatherList';
import WeatherNavigation from '../components/WeatherNavigation';

class WeatherPage extends React.Component {

	render() {
		const page = this.props.match.params.page ? this.props.match.params.page : 1;

		return(
			<div>
	            <div className="page-header">
                  <h1>Weather Page <small>page: </small> {page} <small>of</small> {dummyData.forecast.length} </h1>
                  <WeatherNavigation currentPage={page} totalPages={dummyData.forecast.length} />
                </div>
                <div>
                    <WeatherList weatherCards={dummyData.forecast} currentPage={page}  />
                </div>
	        </div>
		);
	}
}

export default WeatherPage;