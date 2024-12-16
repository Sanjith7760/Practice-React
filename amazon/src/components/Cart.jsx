// Write the codes for amazon website that should select the Component, add to cart, checkout and payment process
import Checkout from './Checkout';
import { useState } from 'react';
// function Cart(props) {
    function Cart() {

  const [clicked, setClicked] = useState(false);
  function gotoCheckout(){
    setClicked(true);
  }
  if(clicked === true){
    // return <Checkout price={props.price}/>
    return <Checkout/>
  }
  return (
    <>
    <h1>Welcome to Cart Component</h1>
    {/* <h2>Price: {props.price}</h2> */}
    <button onClick={gotoCheckout}>Go To Checkout</button>

    </> 
  );
}
export default Cart;
