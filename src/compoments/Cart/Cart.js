import React, { useContext, useState } from 'react'
import { Button, Card, Container, Form, ListGroup, ListGroupItem } from 'react-bootstrap'
import './cart.css';
import { CartContext } from './../../context/Cart/Context';
import { AiFillDelete } from 'react-icons/ai'
import { CHANGE_QTY, REMOVE_FROM_CART } from '../../context/Cart/type';
import Rating from './../Filter/Rating';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';



export default function Cart() {

    const { state: { products, cart }, dispatch } = useContext(CartContext);

    const [totalAmmount, setTotalAmmount] = useState(0);
    console.log('cart :>> ', cart);
    console.log('totalAmmount', totalAmmount);
    useEffect(() => {
        setTotalAmmount(cart.reduce((accu, curr) => accu + parseInt(curr.price) * parseInt(curr.qty), 0))
    }, [cart]);

    return (
        <Container className='cart'>

            <div className="cart_products">

                {
                    (cart.length > 0)
                        ?
                        (

                            cart.map((product) => {
                                return (
                                    <Card >
                                        <Card.Body className='header_cart_box'>

                                            <img src={product.image} className='header_img' alt={product.title} />
                                            <div className="header_cart">
                                                <Card.Title style={{ fontSize: ".98rem" }}> {product.title}  </Card.Title>
                                                <Card.Text>
                                                    <strong> {parseInt(product.price).toFixed(0)} </strong>
                                                    <br />
                                                    <Rating rating={product.rating} />

                                                    <Form.Select
                                                        onChange={(e) => dispatch({
                                                            type: CHANGE_QTY, payload: {
                                                                id: product.id,
                                                                qty: parseInt(e.target.value),
                                                            }
                                                        })}
                                                        value={
                                                            product.qty
                                                        }
                                                    >
                                                        <option>Choose Quantity</option>

                                                        {
                                                            [...new Array(product.inStock).keys()].map((prod) => (
                                                                <option value={prod + 1}> {prod + 1} </option>
                                                            ))
                                                        }

                                                    </Form.Select>
                                                    <div className="">
                                                        <AiFillDelete onClick={() => dispatch({
                                                            type: REMOVE_FROM_CART
                                                            , payload: product
                                                        })} style={{ color: "red", fontSize: "1.7rem", cursor: "pointer" }} />
                                                    </div>
                                                </Card.Text>



                                            </div>

                                        </Card.Body>
                                    </Card>

                                )
                            })
                        )
                        :
                        (

                            <div className="">
                                <h2> there  are  no items in the cart</h2>

                                <Link to='/'>
                                    <Button variant='primary' > Back to Home</Button>

                                </Link>
                            </div>
                        )
                }

            </div>
            <div className="cart_filter">
                <h1 className='total_item'>Total Items   ({cart?.length || 0})</h1>
                <h1 className='total_subtotal'>Sub Total  :  {totalAmmount} </h1>
                <Button variant='primary' disabled={cart?.length == 0}> Proceed to Checkout </Button>
            </div>
        </Container>
    )
}
