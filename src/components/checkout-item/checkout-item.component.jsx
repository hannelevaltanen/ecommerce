import React from 'react';

import './checkout-item.styles.scss';
import checkoutComponent from '../../pages/checkout/checkout.component';

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => (
	<div className="checkout-item">
		<div className="image-container">
			<img src={imageUrl} alt="item" />
		</div>
		<span class="name">{name}</span>
		<span class="quantity">{quantity}</span>
		<span class="price">{price}</span>
		<div class="remove-button">&#10005;</div>
	</div>
);

export default CheckoutItem;
