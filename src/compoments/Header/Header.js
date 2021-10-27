
import React, { useContext } from 'react'
import { Badge, Container, Form, Nav, Navbar, Dropdown, Card, Button } from 'react-bootstrap'

import { BsCartDashFill } from "react-icons/bs";
import { CartContext } from '../../context/Cart/Context';
import Rating from '../Filter/Rating';
import { AiFillDelete } from 'react-icons/ai'

import './header.css';
import { FILTER_BY_SEARCH_QUERY, REMOVE_FROM_CART } from '../../context/Cart/type';
import { Link } from 'react-router-dom';


export default function Header() {

    const { state: { products, cart }, dispatch } = useContext(CartContext);

    const { products: {
        byStock,
        byRating,
        bySearchQuery,
        byFastestDelivery, 
    sort }, dispatchProducts } = useContext(CartContext);

 
console.log('bySearchQuery :>> ', bySearchQuery);

    return (
        <>
            <Navbar bg='dark' variant='dark' expand="lg">
                <Container>
                    <Link  to='/'>
                                        <Navbar.Brand >React Shopping Cart</Navbar.Brand>
                     </Link>
                    <Navbar.Text>
                        <Form className='me-auto'>
                            <Form.Control  
                            onChange={(e)=>dispatchProducts({type:FILTER_BY_SEARCH_QUERY, payload:e.target.value})}
                            
                            style={{ width: 500 }} type="search" placeholder="Search products." />
                        </Form>
                    </Navbar.Text>

                    <Nav>

                        <Dropdown drop='down'>
                            <Dropdown.Toggle variant="light" id="dropdown-basic">
                                <Badge bg="light" style={{ backgroundColor: "none" }} text="dark" >
                                    <BsCartDashFill fontSize={18} />
                                    {cart.length || 0}</Badge>
                            </Dropdown.Toggle>

                            <Dropdown.Menu    >


                                {
                                    (cart.length > 0)
                                        ?
                                        (
                                            <div>

                                                {
                                                    cart.map((product) => {
                                                        return (
                                                            <Card style={{ width: "24rem" }}>
                                                                <Card.Body className='header_cart_box'>

                                                                    <img src={product.image} className='header_img' alt={product.title} />
                                                                    <div className="header_cart">
                                                                        <Card.Title style={{ fontSize: ".98rem" }}> {product.title}  </Card.Title>
                                                                        <Card.Text>
                                                                            <strong> {product.price} </strong>
                                                                            <br />
                                                                            <Rating rating={product.rating} />
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
                                                }


                                                <Link to='/cart'>
                                                    <div className="d-grid gap-2">

                                                        <Button variant="primary" size="lg">
                                                            Go To Cart
                                                        </Button>

                                                    </div>
                                                </Link>

                                            </div>

                                        )
                                        :
                                        (

                                            <Dropdown.Item as='span' >  Cart is empty</Dropdown.Item>
                                        )
                                }






                            </Dropdown.Menu>
                        </Dropdown>

                    </Nav>
                </Container>
            </Navbar>


        </>
    )
}
