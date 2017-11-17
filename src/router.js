import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import WeatherPage from './pages/WeatherPage';

class Router extends Component {
  render() {
    return (
  	    <Switch>
  	        <div>
  	        	<Route exact path='/:page' component={WeatherPage}/>
  	        	<Route exact path='/' component={WeatherPage}/>
  	        </div>
  	    </Switch>
    );
  }
}

export default Router;