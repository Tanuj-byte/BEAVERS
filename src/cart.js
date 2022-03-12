import React from "react";
import "./cartitem.css";
import CartItem from "./cartitem";

class Cart extends React.Component {
     constructor() {
        super();
         this.state = {
            
            products: [
                {
                    price: 499,
                    title: 'FULL CLEAN',
                    qty: 2,
                    id:1,
                    imga: "https://hometriangle.com/imagecache/media/14264/htr-image-14264.jpg?size=900x600-3",
                    popup:"Nulla facilisi. Donec gravida erat sed odio molestie, vitae sollicitudin lacus hendrerit. Proin nisl sapien, vulputate sit amet porta pulvinar, tincidunt in risus. Cras efficitur"
                },
                {
                    price: 599,
                    title: 'DEEP CLEAN',
                    qty: 2,
                     id:2,
                    imga: "https://hometriangle.com/imagecache/media/14264/htr-image-14264.jpg?size=900x600-3",
                    popup:"Nulla facilisi. Donec gravida erat sed odio molestie, vitae sollicitudin lacus hendrerit. Proin nisl sapien, vulputate sit amet porta pulvinar, tincidunt in risus. Cras efficitur"
                },{
                    price: 299,
                    title: 'AC REPAIR',
                    qty: 1,
                     id:3,
                    imga: "https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/images/growth/luminosity/1634619370186-bd388c.jpeg",
                    popup:"Nulla facilisi. Donec gravida erat sed odio molestie, vitae sollicitudin lacus hendrerit. Proin nisl sapien, vulputate sit amet porta pulvinar, tincidunt in risus. Cras efficitur"
                }

            ]
        }
    }
    handleIncreaseQuantity = ( product )=>{
        const { products } = this.state;
        const index = products.indexOf(product);
        products[index].qty += 1;
        this.setState({
            products:products
        })
    }
    handleDecreaseQuantity = (product) => {
        const { products } = this.state;
        const index = products.indexOf(product);
        if (products[index].qty === 0) {
            return;
        }
        products[index].qty -=1;
        this.setState({
            products:products
        })
    }
    handleDelete = (index) => {
        const { products } = this.state;
        const items = products.filter((item) => item.id != index);
        this.setState({
            products:items
        })

    }
    total=() => {
        const { products } = this.state;
        let countTotal = 0;
        products.map((product) => {
            countTotal += product.qty * product.price
        })
        return countTotal;
    }
    countQty=() => {
        const { products } = this.state;
        let countTotal = 0;
        products.map((product) => {
            countTotal += product.qty 
        })
        return countTotal;
    }
    render() {
        
        const { products }=this.state;
        return(
             <div className="Cart">
                        <div class="Cart-Container">
                            <div className="Header">
                                <h3 class="Heading">Shopping Cart</h3>
                                <h5 class="Action">Remove all</h5>
                    </div> 
                    {
                        products.map((product) => {
                            return (
                                < CartItem
                                    product={product}
                                    key={product.id}
                                    onIncreaseQuantity={this.handleIncreaseQuantity}
                                    onDecreaseQuantity={this.handleDecreaseQuantity}
                                    onDelete={this.handleDelete}
                                />
                        )
                        })
                        
                     }
                    <hr/>
                    <div class="checkout">
                                <div class="total">
                                    <div>
                                        <div class="Subtotal">Sub-Total</div>
                                        <div class="items">{this.countQty()} items</div>
                                    </div>
                                    <div class="total-amount">{this.total()}</div>
                                </div>
                                <button class="button">Checkout</button>
                            </div>
                        </div>
                    
                   
                    
                </div>
            );
    }

}
export default Cart;