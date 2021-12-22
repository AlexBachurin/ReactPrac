const reducer = (state, action) => {
    if (action.type === 'CLEAR_ALL_ITEMS') {
        return { ...state, cartItems: [] }
    }
    return state;
}

export default reducer;