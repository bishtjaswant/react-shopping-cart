import React, { useContext } from 'react'
import Filter from '../Filter/Filter';
import { Product } from '../Product/Product';
import { CartContext } from './../../context/Cart/Context';
import './home.css';


export default function Home() {

    const { state: { products, cart }, dispatch } = useContext(CartContext);

    const { products: {
        byStock,
        byRating,
        bySearchQuery,
        byFastestDelivery,
        sort }, dispatchProducts } = useContext(CartContext);


    const newProducts = () => {
        let sortedProducts = products;

        if (sort) {
            sortedProducts = products.sort((a, b) => {
                return (sort == 'lowToHigh') ? a.price - b.price : b.price - a.price;
            })
        } 
 
        // if(!byStock){
        //     sortedProducts=  products.filter(prod=>prod.byStock)
        // }
        if(byFastestDelivery){
            sortedProducts=  products.filter(prod=>prod.fastDelivery)
        }
        if(byRating){
            sortedProducts=  products.filter(prod=>(prod.rating>=byRating));
        }
        if(bySearchQuery){
            sortedProducts=  products.filter(prod=>(prod.title.toLowerCase().includes(bySearchQuery)));
        }


        return sortedProducts;
    }


    return (
        <div className='home'>

            <Filter />

            <div className="product_container">

                {
                    newProducts().map((prod) => (
                        <Product product={prod} key={prod.id} />
                    ))
                }
            </div>
        </div>
    )
}
