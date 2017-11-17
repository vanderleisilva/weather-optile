import React from "react";
import {weatherCardType} from '../../utils/custom-prop-types';

class WeatherCard extends React.Component {

	static propTypes = {		
		item: weatherCardType.isRequired
	}

	render() {
		return(
			<div className="thumbnail">
                <div className="caption">
                    <p>Code: {this.props.item.code}</p>
					<p>Date: {this.props.item.date}</p>
					<p>Day: {this.props.item.day}</p>
					<p>High: {this.props.item.high}</p>
					<p>Low: {this.props.item.low}</p>
					<p>Text: {this.props.item.text}</p>
    	        </div>
	        </div>
		);
	}

}

export default WeatherCard;