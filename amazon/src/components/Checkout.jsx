// Write the codes for amazon website that should select the Component, add to cart, checkout and payment process
import Payment from './Payment';
import { useState } from 'react';
// function Checkout(props) {
    function Checkout() {

  const [clicked, setClicked] = useState(false);
  function gotoPayment(){
    setClicked(true);
  }
  if(clicked === true){
    // return <Payment price={props.price}/>
    return <Payment />
  }
  return (
    <>
    <h1>Welcome to Checkout Component</h1>
    {/* <h2>Price: {props.price}</h2> */}
    <button onClick={gotoPayment}>Go To Payment</button>

    </> 
  );
}
export default Checkout;
