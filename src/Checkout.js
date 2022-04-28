import React from 'react'
import { useStateValue } from './StateProvider';
import "./Checkout.css"
import { image } from 'gltf-pipeline/lib/ForEach';
import CheckoutProduct from './CheckoutProduct';
import log from 'eslint-plugin-react/lib/util/log';

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <img className="checkout__ad" src="/amazoncheckout.png" alt="" />
      {basket?.length === 0 ? (
        <div>
          <h2>Your basket is empty</h2>
          <p>Check your Saved for later items below or continue shopping. </p>
        </div>
      ) : (
        <div className="checkout__title">
          <h2>You Shopping Basket</h2>
          {/* List all of the checkout products */}
          {basket.map((item) => {
            console.log(item)
            return (
            <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            />
          )})}
        </div>
      )}
    </div>
  )
}

export default Checkout
