import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <img src="/amazonlanding.jpg" id="home__landing" alt="" />
      <div className="home__row">
        {/* Product: id, title, price, rating, image */}
        <Product
          id="1"
          title="My Evil Mother: A Short Story"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/41HBwv6A1ML.jpg"
        />
        <Product
          id="2"
          title="My Evil Mother: A Short Story"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/41HBwv6A1ML.jpg"
        />
      </div>
      <div className="home__row">
        {/* Product: id, title, price, rating, image */}
        <Product
          id="3"
          title="My Evil Mother: A Short Story"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/41HBwv6A1ML.jpg"
        />
        <Product
          id="4"
          title="My Evil Mother: A Short Story"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/41HBwv6A1ML.jpg"
        />
        <Product
          id="5"
          title="My Evil Mother: A Short Story"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/41HBwv6A1ML.jpg"
        />
      </div>
      <div className="home__row">
        {/* Product: id, title, price, rating, image */}
        <Product
          id="6"
          title="My Evil Mother: A Short Story"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/41HBwv6A1ML.jpg"
        />
      </div>
    </div>
  )
}

export default Home
