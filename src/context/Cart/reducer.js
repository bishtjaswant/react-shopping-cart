import React from 'react'
import { ADD_TO_CART, CHANGE_QTY, CLEAR_FILTER, FILTER_BY_FAST_DELIVERY, FILTER_BY_RATINGS, FILTER_BY_SEARCH_QUERY, FILTER_BY_STOCK, REMOVE_FROM_CART, SORT_BY_PRICE, SORT_BY_STOCK } from './type';

export function CartReducer(state, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, { ...action.payload, qty: 1 }],
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(c => c.id !== action.payload.id),
            };

        case CHANGE_QTY:
            return {
                ...state,
                qty: state.cart.filter(c => (c.id === action.payload.id) ? c.qty = action.payload.qty : c.qty),
            };

        default:
            return state;
    }
}

export const productReducer = (state, action) => {
    switch (action.type) {
        case SORT_BY_PRICE:
            return {
                ...state,
                sort: action.payload
            }
        case FILTER_BY_STOCK:
            return { ...state, byStock: !state.byStock }

        case FILTER_BY_FAST_DELIVERY:
            return { ...state, byFastestDelivery: !state.byFastestDelivery }

        case FILTER_BY_RATINGS:
            return { ...state, byRating: action.payload }

        case FILTER_BY_SEARCH_QUERY:
            return { ...state, bySearchQuery: action.payload }

        case CLEAR_FILTER:
            return {
                byStock:false,
                byRating:0,
                bySearchQuery:'',
                byFastestDelivery:false,
            }



        default:
            return state;
    }
};
