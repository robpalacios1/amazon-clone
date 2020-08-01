export const initialState = {
    cart: [
        {
            id: 12321341,
            title:
                "The Lean Startup: How Constant Innovation",
            price: 11.96,
            rating: 5,
            image:
                "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"

        },
    ],
    user: null
};

const reducer = (state, action) => {
    console.log(action)
    switch(action.type) {
        case 'ADD_TO_CART':
            // Logic for adding item to cart
            return {
                ...state,
                cart: [...state.cart, action.item]
            };
        case 'REMOVE_FROM_CART':
            //Logic for removing items from cart

            //we cloned the basket
            let newCart = [...state.cart];

            const index = state.cart.findIndex(
                (cartItem) => cartItem.id === action.id
            );

            if (index >= 0) {
                // item exists in basket, remove it...
                newCart.splice(index, 1);
            } else {
                console.warn(
                    `Cant remove product (id: $(action.id)) as its not in cart`
                );
            }

            return {
                ...state,
                cart: newCart,
            };
        default:
            return state;
    }
}

export default reducer;