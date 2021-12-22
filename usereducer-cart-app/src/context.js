import React, { useEffect, useReducer, useContext } from "react";

import reducer from './reducer'
const AppContext = React.createContext();
const url = 'https://course-api.com/react-useReducer-cart-project';

const initialState = {
    loading: false,
    cartItems: [],
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
    //get it every time cartItems array changes
    useEffect(() => {
        //get total price of items and total amount of items
        dispatch({ type: 'GET_TOTALS' });

    }, [state.cartItems])

    //fetch items
    const getItems = async () => {
        try {
            dispatch({ type: 'LOADING' })
            const res = await fetch(url);
            const items = await res.json();
            dispatch({ type: 'GET_ITEMS', payload: items })
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getItems();
    }, [])

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

