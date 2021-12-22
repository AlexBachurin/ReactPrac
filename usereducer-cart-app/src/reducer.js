const reducer = (state, action) => {
    if (action.type === 'CLEAR_ALL_ITEMS') {
        return { ...state, cartItems: [] }
    } else if (action.type === 'REMOVE_ITEM') {
        const tempCart = state.cartItems.filter(item => {
            return item.id !== action.payload;
        })
        return { ...state, cartItems: tempCart }
    }
    return state;
}

export default reducer;