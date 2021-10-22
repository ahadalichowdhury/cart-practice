import React from 'react'
import "./cart.css"


const Cart= (props)=> {
    const cart=props.cart;
    const courseTotal = cart.reduce((sum, course) => sum+ course.price, 0);
    const tax = courseTotal/10;
    const grandTotal = courseTotal+ tax;
    return (
        <div>
            <h2>Total Item Ordered: {cart.length}</h2>
            <p>Price: {courseTotal}</p>
            <p>Tax: {tax} </p>
            <h3>Grand Total: {grandTotal}</h3>
            <button>Place Ordered</button>
        </div>
    )
}

export default Cart
