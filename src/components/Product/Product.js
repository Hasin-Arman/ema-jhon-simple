import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee ,faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    console.log(props);
    const {img, name,seller,stock,price} = props.product;
    return (
        <div className="product">
            <div>
                <img src={img}></img>
            </div>
            <div className="product-name">
                <h4 >{name}</h4>
                <br></br>
                <p><small>by:{seller}</small></p>
                <p>${price}</p>
                <p>only {stock} left in stock-Order soon</p>
                <button onClick={()=>props.handleAddProduct(props.product)} className="main-button"><FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;