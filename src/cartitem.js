import React from "react";
import './cartitem.css';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 
class CartItem extends React.Component {

   

    render() {
        const { price, title, qty, imga,key,popup } = this.props.product;
        return (
            
                 <div class="Cart-Items">
                            <div class="image-box" >
                                <img src={imga} style={{ height: 120 , width:180 }} />
                            </div>
                <div class="about">
                                <Tippy content={popup} >
                                <h1 class="title">{title}</h1>
                               </Tippy>
                                <h3 class="subtitle" >{qty}</h3>
                            
                            </div>
                            <div class="counter">
                                <div class="btn" onClick={()=>this.props.onIncreaseQuantity(this.props.product)}>+</div>
                                <div class="count">{qty}</div>
                                <div class="btn" onClick={()=>this.props.onDecreaseQuantity(this.props.product)}>-</div>
                            </div>
                            <div class="prices">
                                <div class="amount">{price}</div>
                               
                                <div class="remove" onClick={()=>this.props.onDelete(this.props.product.id)}><u>Remove</u></div>
                            </div>
                             
                        </div>
                
               
    
        
        );
    }

}
export default CartItem;