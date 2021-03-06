import React from 'react';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct'
import './Checkout.css';
import Subtotal from './Subtotal'

function Checkout() {
    const [{ cart }] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt=""
                />
                {cart?.length === 0 ? (
                    <div>
                        <h2>Your Shopping Cart is Empty</h2>
                        <p>
                            You have no items in your cart, to buy one or more items, click "Add to Cart" next to the items.
                        </p>
                    </div>
                ) : (
                    <div>
                        <h2 className="checkout__title">Your Shopping Cart</h2>
                        {cart?.map((item) => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                )}
                </div>
                {cart.length > 0 && (
                    <div className="checkout__right">
                        <Subtotal />
                    </div>
                )}
            </div>
    );
}

// react-currency-format
export default Checkout
