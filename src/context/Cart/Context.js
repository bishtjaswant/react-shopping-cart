import React, { useContext, useReducer, useState } from 'react'
import { createContext } from 'react'
import faker from 'faker';
import { CartReducer, productReducer } from './reducer';

export const CartContext= createContext(null);

const productsArray= [...new Array(25)].map(()=>({
        id:  faker.datatype.uuid(),
        title:  faker.commerce.productName(),
        price:  faker.commerce.price(),
        image:  faker.random.image(),
        fastDelivery:  faker.datatype.boolean(),
        inStock:  faker.random.arrayElement([85,21,34,78,8]),
        rating:  faker.random.arrayElement([1,2,3,4,5])  
    }));

export default function Context({children}) {


    const [state, dispatch] = useReducer(CartReducer, {
        products:productsArray,
        cart:[]
    });
   
    
    const [products, dispatchProducts] = useReducer(productReducer, {
        byStock:false,
        byRating:0,
        bySearchQuery:'',
        byFastestDelivery:false,
    })


  return(
      <CartContext.Provider  value={{state, dispatch, products, dispatchProducts}}>
          {children}
      </CartContext.Provider>
  );;
}
 
