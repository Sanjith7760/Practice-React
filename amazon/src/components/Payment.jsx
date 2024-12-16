import React from 'react'

export default function Payment(props) {
    let gotoPhonepay = () =>{
        window.open('https://www.phonepe.com', '_blank');
    }
  return (
    <>
    <h1>Welcome to Payment Component</h1>
    <h2>Price : </h2>
    <h2>Please proceed to the payment</h2>
    <button onClick={gotoPhonepay}>Go to Phone Pay</button>
    </>
  )
}
