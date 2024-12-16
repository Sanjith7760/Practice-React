// Write the codes for amazon website that should select the Component, add to cart, checkout and payment process, So this will needs to pass from one component to another component and we can't pass the price value from app to payment
//To overcome this we use redux 
import Selection from './components/Selection';
import { useState } from 'react';
function App() {

  const [clicked, setClicked] = useState(false);
  function gotoSelection(){
    setClicked(true);
  }
  if(clicked === true){
    // return <Selection price='799'/>
    return <Selection/>
  }
  return (
    <>
    <h1>Welcome to Amazon</h1>
    <button onClick={gotoSelection}>Select Product</button>
    </> 
  );
}

export default App;
