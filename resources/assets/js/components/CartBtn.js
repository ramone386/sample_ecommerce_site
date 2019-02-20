import React, { Component } from 'react';


export default class CartBtn extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Joe'
		};
	}
	clickedBtn = () => {};
	async test() {}
	render() {
		return (
			<a href="#" class="cart-link">
				Cart<div>4</div>
			</a>
		);
	}
}

