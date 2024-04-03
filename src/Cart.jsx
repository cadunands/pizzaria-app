import React from "react";
import CartItem from "./CartItem/CartItem";

import "./Cart.css";

function Cart({ cartItems }) {
	return (
		<div className="cart">
			<h2>Carrinho de Compras</h2>
			{cartItems.map((item, index) => (
				<CartItem
					key={index}
					pizza={item.pizza}
					quantity={item.quantity}
				/>
			))}
		</div>
	);
}

export default Cart;
