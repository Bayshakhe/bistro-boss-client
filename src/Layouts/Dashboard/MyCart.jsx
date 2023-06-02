import React from 'react';
import useCart from '../../hooks/useCart';

const MyCart = () => {
    const [cart] = useCart()
    console.log(cart)
    const total = cart.reduce((sum, item) => item.price + sum, 0)
    return (
        <div>
            <p className='text-3xl uppercase'>Total Items: {cart.length}</p>
            <p className='text-3xl uppercase'>Total Price: ${total}</p>
        </div>
    );
};

export default MyCart;