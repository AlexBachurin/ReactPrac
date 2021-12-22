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


    const clearCart = () => {
        dispatch({ type: 'CLEAR_ALL_ITEMS' });
    }
    return (
        <AppContext.Provider value={
            {
                ...state,
                clearCart
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

