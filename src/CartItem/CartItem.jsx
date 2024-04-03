import React from "react";

function CartItem({ pizza, quantity }) {
	return (
		<div className="cart-item">
			<p>{pizza.name}</p>
			<p>Quantidade: {quantity}</p>
			<p>Total: ${pizza.price * quantity}</p>
		</div>
	);
}

export default CartItem;
