import React from 'react'
import './DataStyles.css'
import mobile from '../../assets/ride.gif'
 
const Data = () => {
    return (
        <div className='data'>
            <div className="container">
                <div className='container-div'>
                    <img className='image' src={mobile} />
                    <div className="content">
                        <h2><span>About</span> Us</h2>
                        <p>Everywhere and for everyone. Ride or drive, shop or deliver, send or receive with DelivMan — offer-your-price mobility app for fair deals.</p>
                        <div>
                            <button>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Data
