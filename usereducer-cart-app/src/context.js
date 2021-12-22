import React, { useState, useEffect, useReducer, useContext } from "react";

import data from './data';
import reducer from './reducer'
const AppContext = React.createContext();

const initialState = {
    loading: false,
    cartItems: data,
    totalAmount: 0,
    totalPrice: 0,

}

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    //clear All Items
    const clearCart = () => {
        dispatch({ type: 'CLEAR_ALL_ITEMS' });
    }
    //remove single item
    const removeItem = (id) => {
        dispatch({ type: 'REMOVE_ITEM', payload: id })
    }
    //increase amount of item
    const increaseAmount = (id) => {
        dispatch({ type: 'INCREASE_AMOUNT', payload: id })
    }
    //decrease amount of item
    const decreaseAmount = (id) => {
        dispatch({ type: 'DECREASE_AMOUNT', payload: id })
    }
    useEffect(() => {
        //get total price of items and total amount of items
        dispatch({ type: 'GET_TOTALS' });

    }, [state.cartItems])

    return (
        <AppContext.Provider value={
            {
                ...state,
                clearCart,
                removeItem,
                increaseAmount,
                decreaseAmount
            }
        }>
            {children}
        </AppContext.Provider>
    )
}

//custom hook

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };

