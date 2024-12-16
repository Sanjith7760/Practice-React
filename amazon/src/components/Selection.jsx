// Write the codes for amazon website that should select the Component, add to cart, checkout and payment process
import Cart from './Cart';
import { useState } from 'react';
// function Selection(props) {
    function Selection() {

  const [clicked, setClicked] = useState(false);
  function gotoCart(){
    setClicked(true);
  }
  if(clicked === true){
    // return <Cart price={props.price}/>
    return <Cart />
  }
  return (
    <>
    <h1>Welcome to Select Component</h1>
    {/* <h2>Price: {props.price}</h2> */}
    <button onClick={gotoCart}>Go To Cart</button>

    </> 
  );
}
export default Selection;
