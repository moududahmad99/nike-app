import React from 'react'
import './Style.css'

const NikeAirMax = () => {
    return (
        <React.Fragment>
            <div id="nike-air-max">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 text-center">
                            <div className="nike-air-max--inner">
                                <h5>First Look</h5>
                                <h1>Nike Air Max Pulse</h1>
                                <p>Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
                                    —designed to push you past your limits and help you go to the max.</p>
                                <div className="nike-air-max--buttons">
                                    <a href='/'>Notify Me</a>
                                    <a href='/'>Shop Air Max</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default NikeAirMax