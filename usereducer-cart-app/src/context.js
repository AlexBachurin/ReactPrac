import React, { useState, useEffect, useReducer, useContext } from "react";

import data from './data';
import reducer from './reducer'
const AppContext = React.createContext();

const initialState = {
    loading: false,
    cartItems: data,
    totalItems: 0,
    totalAmount: 0,

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
    return (
        <AppContext.Provider value={
            {
                ...state,
                clearCart,
                removeItem,
                increaseAmount
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

