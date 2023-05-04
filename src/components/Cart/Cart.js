import React from 'react';
import './Cart.css';

const Cart = ({cart, handleRemoveItem}) => {

    let message;
    if(cart.length === 0){
        message = <p>Please buy at least one item !!!</p>
    }
    else{
        message = <p>Thanks for buying.</p>
    }
    return (
        <div>
            <h3 className={cart.length === 2 ? `orange` : 'gray'}>Order summary</h3>
            <h5 className={`bold ${cart.length === 2 ? 'lightblue' : 'green'}`}>Order quantity: {cart.length}</h5>
            {
                cart.map(tshirt => <p
                key={tshirt._id}
                >
                    {tshirt.name}
                    <button onClick={() => handleRemoveItem(tshirt)}>X</button>
                </p>)
            }
            {
                message
            }
        </div>
    );
};

export default Cart;