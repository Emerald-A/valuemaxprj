import React, { useState } from 'react'
import "./home.css"
import speakerData from "./data.json"
import SideBar from './SideBar'
import Nav from './Nav'

function Home() {
    const [prices, setPrices] = useState(Array(speakerData.length).fill(0));

    const handleButtonClick = (index, newPrice) => {
      setPrices(prevPrices => {
        const updatedPrices = [...prevPrices];
        updatedPrices[index] = newPrice;
        return updatedPrices;
      });
    };

  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='sideBar col-2'>
               <SideBar />
            </div>
            <div className='col-10 main'>
               <Nav />
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mx-auto catalogue">
                     {speakerData.map((speaker, index) => (
                        <div className="" key={index}>
                            <div className="card">
                                <img src={speaker.image} alt="Product Image"/>
                                <div className="item-name">{speaker.name}</div>
                                <div className="rating">⭐⭐⭐⭐⭐</div>
                                <div className="price">${prices[index] || speaker.price}</div>
                                <button className="buy-button" onClick={() => handleButtonClick(index, 50)}>Buy Me</button>
                            </div>
                        </div>
                     ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home