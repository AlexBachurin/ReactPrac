const reducer = (state, action) => {
    if (action.type === 'CLEAR_ALL_ITEMS') {
        return { ...state, cartItems: [] }
    }
    if (action.type === 'REMOVE_ITEM') {
        const tempCart = state.cartItems.filter(item => {
            return item.id !== action.payload;
        })
        return { ...state, cartItems: tempCart }
    }
    if (action.type === 'INCREASE_AMOUNT') {
        //increase amount of item by provided id
        const tempCart = state.cartItems.map(item => {
            if (item.id === action.payload) {
                return { ...item, amount: item.amount + 1 }
            }
            return item;
        })
        return { ...state, cartItems: tempCart }
    }
    if (action.type === 'DECREASE_AMOUNT') {
        //decrease amount of item by provided id
        const tempCart = state.cartItems.map(item => {
            if (item.id === action.payload) {
                return { ...item, amount: item.amount - 1 }
            }
            return item;
        })
        //if amount of item <1 we remove it from our cart list
        const filteredCart = tempCart.filter(item => {
            return item.amount > 0;
        })
        return { ...state, cartItems: filteredCart }
    }
    if (action.type === 'GET_TOTALS') {
        let { totalPrice, totalAmount } = state.cartItems.reduce(
            (cartTotal, cartItem) => {
                const { price, amount } = cartItem
                const itemTotal = price * amount

                cartTotal.totalPrice += itemTotal
                cartTotal.totalAmount += amount
                return cartTotal
            },
            {
                totalPrice: 0,
                totalAmount: 0,
            }
        )
        totalPrice = parseFloat(totalPrice.toFixed(2))

        return { ...state, totalPrice, totalAmount }
    }
    if (action.type === 'LOADING') {
        return { ...state, loading: true }
    }
    if (action.type === 'GET_ITEMS') {
        return { ...state, loading: false, cartItems: action.payload }
    }
    throw new Error('No such action type found')

}

export default reducer;