import React, { Component } from 'react';
import './App.css';

import * as Pages from './Pages/';

class App extends Component {
 	render() {
		return (
			<div>
				<Pages.Main/>
			</div>
		)
	}	
}

export default App;