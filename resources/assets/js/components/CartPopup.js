import React, { Component } from 'react';


export default class CartPopup extends Component {
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
			<section id="cart-popup" className="">
				<div>
					<div className="cart-title">
						<div className="title">My Cart</div>
					</div>
				</div>
				<div className="cart-items">
					<div className="item-container">
						<div className="item">
							<img src="/img/products/adidas-yeezy-boost.png " />
							<div className="delete-btn">
								<div className="circle">X</div>
							</div>
						</div>
					</div>
					<div className="item-container">
						<div className="item">
							<img src="/img/products/adidas-yeezy-boost.png" />
							<div className="delete-btn">
								<div className="circle">X</div>
							</div>
						</div>
					</div>
					<div className="item-container">
						<div className="item">
							<img src="/img/products/adidas-yeezy-boost.png" />
							<div className="delete-btn">
								<div className="circle">X</div>
							</div>
						</div>
					</div>
					<div className="item-container">
						<div className="item">
							<img src="/img/products/adidas-yeezy-boost.png" />
							<div className="delete-btn">
								<div className="circle">X</div>
							</div>
						</div>
					</div>
					<div className="item-container">
						<div className="item">
							<img src="img/products/adidas-yeezy-boost.png" />
							<div className="delete-btn">
								<div className="circle">X</div>
							</div>
						</div>
					</div>
					<div className="item-container">
						<div className="item">
							<img src="/img/products/adidas-yeezy-boost.png" />
							<div className="delete-btn">
								<div className="circle">X</div>
							</div>
						</div>
					</div>
					<div className="item-container">
						<div className="item">
							<img src="/img/products/adidas-yeezy-boost.png" />
							<div className="delete-btn">
								<div className="circle">X</div>
							</div>
						</div>
					</div>
				</div>
				<div className="product-total">
					<div className="product-container">
						<div className="title">Total</div>
						<div className="number">x4</div>
					</div>
				</div>
				<div className="price-total">
					<div className="price-container">
						<div className="title">Total</div>
						<div className="number">$3000</div>
					</div>
				</div>
				<div className="checkout">
					<div className="title">Checkout</div>
					<span className="ti-shopping-cart" />
				</div>
			</section>
		);
	}
}



