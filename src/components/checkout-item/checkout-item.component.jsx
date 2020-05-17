import React from 'react';
import { connect } from 'react-redux';

import { clearItemFromCart } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';
import checkoutComponent from '../../pages/checkout/checkout.component';

const CheckoutItem = ({ cartItem, clearItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;
	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt="item" />
			</div>
			<span class="name">{name}</span>
			<span class="quantity">{quantity}</span>
			<span class="price">{price}</span>
			<div class="remove-button" onClick={() => clearItem(cartItem)}>
				&#10005;
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	clearItem: (item) => dispatch(clearItemFromCart(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
