import React from 'react'
import './Style.css'

const Banner = () => {
    return (
        <React.Fragment>
            <div id="Banner-top">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5 mt-4 text-center">
                            <div className="banner-top">
                                <h4>Hello Nike App</h4>
                                <p>Download the app to access everything Nike. <span>Get Your Great</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div id="banner-wrapper">
                </div>
            </div>
        </React.Fragment>
    )
}

export default Banner