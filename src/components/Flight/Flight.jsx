import React from 'react'
import './Style.css'

const Flight = () => {
    return (
        <React.Fragment>
            <div className="container-fluid">
                <h3 className='flight-heading'>Don't Miss</h3>
                <div className="row">
                    <div className="flight-wrapper">
                        <picture>
                            <img src="./assets/flight.png" alt="flight" />
                        </picture>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-6 text-center">
                        <div className="flight-essentials">
                            <h1>Flight Essentials</h1>
                            <p>Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</p>
                            <a href="/">Shop</a>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Flight