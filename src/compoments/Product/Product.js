import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { CartContext } from '../../context/Cart/Context';
import Rating from '../Filter/Rating';
import { ADD_TO_CART , REMOVE_FROM_CART} from './../../context/Cart/type';

export const Product = ({ product }) => {

    const { state: { products, cart }, dispatch } = useContext(CartContext);
 
    return (
        <div className="products">
            <Card style={{ width: "14rem", gap: " 15px 0" }}>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">RS  {parseInt(product.price).toFixed(0)} </Card.Subtitle>
                    <Card.Text>
                        {(product.fastDelivery) ? <div>fastest delivery</div> : <div>5 day delivery</div>}
                    </Card.Text>
                    <Rating rating={product.rating} />
                    <br />
                    {
                        cart.some(c => c.id === product.id) ? (
                            <Button onClick={()=> dispatch({type:REMOVE_FROM_CART, payload:product})}variant='danger'>Remove From cart</Button>
                        ) : (

                            <Button onClick={()=> dispatch({type:ADD_TO_CART, payload:product})} variant="success" disabled={!product.inStock}>
                                {
                                    (product.inStock) ? ' Add To Cart ' : 'Out Of Stock'
                                }
                            </Button>
                        )
                    }

                </Card.Body>
            </Card>
        </div>
    )
}
