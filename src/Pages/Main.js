import React, { Component } from 'react';

import * as Pages from './index.js';

export default class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			page: 0,
			single: false
		}
	}
	handleClick = (e) => {
		this.setState({ page: e });
	}
	render = () => {
		const page = this.state.page;
		return (
			<div>
				{ page === 0 ? <Pages.Menu page={ (e) => this.handleClick(e) }/> : null }
				{ page === 1 ? <Pages.Single/> : null }
			</div>
		)
	}
}