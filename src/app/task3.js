"use client";
import { useState } from "react";
import "../../public/assets/css/global.css";

export default function Home() {
  const [images] = useState([
    "/assets/images/1.png",
    "/assets/images/2.png",
    "/assets/images/3.png",
    "/assets/images/4.png",
    "/assets/images/5.png"
  ]);

  const [index, setCurrentImage] = useState(0);

  // previous slide
  const prevSlide = () => {
    setCurrentImage((index - 1 + images.length) % images.length);
  };

  // next slide
  const nextSlide = () => {
    setCurrentImage((index + 1) % images.length);
  };

  let singleProduct = {
    id: 1,
    image: "/assets/images/7.png",
    name: "Router 2.0",
    price: "$190",
    rating: 5
  }

  let [counter, setCounter] = useState(1);

  //Increment
  const increment = () => {
    if(counter >= 3) {
      alert('you limit has been exceeded.');
    } else {
      setCounter(counter + 1);
    }
  };

  //Decrement
  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  let stars = '★'.repeat(singleProduct.rating) + '☆'.repeat(5 - singleProduct.rating);

  

  let [counters2, setCounters] = useState([1, 1, 1, 1, 1, 1, 1, 1]);

  const handleIncrement = (index) => {
    let copyCounters = [...counters2];
    copyCounters[index]++;
    setCounters(copyCounters);   
  }

  const handleDecrement = (index) => {
    if (counters2[index] > 0) {
      let copyCounters = [...counters2];
      copyCounters[index]--;
      setCounters(copyCounters);
    }
  }

  return (
    <>

      <div className="page-wrapper">
        <h3 className="heading">Task 1</h3>
        <div className="galleryContainer">
          <div className="slider">
            <img
              src={images[index]}
              alt={`Slide ${index + 1}`}
              className="slideImage"
            />
          </div>

          <div className="arrows d-flex">
            <span className="prev" onClick={prevSlide}>〈</span>
            <span className="next" onClick={nextSlide}>〉</span>
          </div>

          <div className="pagination">Showing {index + 1} of {images.length}</div>
        </div>
        <br /><br /><br />
        
        <h3 className="heading">Task 2</h3>
        <div className="shop-container">

          <div className="singleCart">
            <div className="shop-item">
              <div className="inner-box">
                  <div className="image">
                    <a href="#"><img src={singleProduct.image} alt={singleProduct.name} /></a>
                  </div>
                  <div className="lower-content">
                    <h4><a href="#">{singleProduct.name}</a></h4>
                    <div className="price-rating">
                      <div className="price">{singleProduct.price}</div>
                      <div className="rating">
                        {stars}
                      </div>
                    </div>
                    <div className="options-box">
                      <a href="#" className="read-more">Details</a>
                      <div className="productCounter">
                        <button onClick={decrement}>-</button>
                        <input type="text" value={counter} readOnly />
                        <button onClick={increment}>+</button>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>

        <h3 className="heading">Task 3</h3>
        <div className="shop-container">
          
          {counters2.map((counter, index) => (
          <div className="shop-item" key={index}>
              <div className="inner-box">
                  <div className="image">
                      <a href="#"><img src="assets/images/1.png" alt="" /></a>
                  </div>
                  <div className="lower-content">
                      <h4><a href="#"></a></h4>
                      <div className="price-rating">
                          <div className="price">$20.00</div>
                          <div className="rating">
                              &#9733;&#9733;&#9733;&#9733;&#9734;
                          </div>
                      </div>
                      <div className="options-box">
                        <a href="#" className="read-more">Details</a>
                        <div className="productCounter">
                          <button onClick={() => handleDecrement(index)}>-</button>
                          <input type="text" value={counter} readOnly />
                          <button onClick={() => handleIncrement(index)}>+</button>
                        </div>
                      </div>
                  </div>
              </div>
          </div>
          ))}

        </div>
      </div>

    </>
  );


}
