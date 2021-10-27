import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Rating from './Rating';
import { CartContext } from './../../context/Cart/Context';
import { CLEAR_FILTER, FILTER_BY_FAST_DELIVERY, FILTER_BY_RATINGS, FILTER_BY_STOCK, SORT_BY_PRICE } from '../../context/Cart/type';


export default function Filter() {


    const { products: {
        byStock,
        byRating,
        bySearchQuery,
        byFastestDelivery, 
    sort }, dispatchProducts } = useContext(CartContext);

 

    return (
        <div className="filters">
            <span className="title">filter</span>
            <span>
                <Form.Check
                    inline
                    label='accending'
                    name='filter'
                    type='radio'
                    id={`accending`}
                    onChange={(e) => dispatchProducts({ type: SORT_BY_PRICE, payload: 'lowToHigh' })}
                    checked={(sort === 'lowToHigh') ? true : false}
                >
                </Form.Check>
            </span>

            <span>
                <Form.Check
                    inline
                    label='descending'
                    name='filter'
                    type='radio'
                    id={`descending`}
                    
                    onChange={(e) => dispatchProducts({ type: SORT_BY_PRICE, payload: 'highToLow' })}
                    checked={(sort === 'highToLow') ? true : false}
                    
                    >
                </Form.Check>
            </span>

            <span>
                <Form.Check
                    inline
                    label='Out Of Stock'
                    name='filter'
                    type='radio'
                    id={`outStock`}
                    
                    onChange={()=>dispatchProducts({type:FILTER_BY_STOCK})}
                    checked={byStock}

                    >
                </Form.Check>
            </span>


            <span>
                <Form.Check
                    inline
                    label='fast delivery'
                    name='filter'
                    type='radio'
                    id={`fastDelivery`}
                    onChange={()=>dispatchProducts({type:FILTER_BY_FAST_DELIVERY})}
                    checked={byFastestDelivery}
                    >
                        
                </Form.Check>
            </span>

            <span style={{ margin: "10px 0" }}>
                <label htmlFor="">Rating </label>
                <Rating onClick={(i) => dispatchProducts({
                    type: FILTER_BY_RATINGS,
                    payload: (i + 1)
                })} rating={byRating} styles={{ cursor: "pointer" }} />
            </span>


        <Button onClick={(e)=>dispatchProducts({type:CLEAR_FILTER})} variant="light">Clear filters</Button>
        </div>

    )
}
