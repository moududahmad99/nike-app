import React from 'react'
import "./Style.css"

const Features = () => {
    return (
        <React.Fragment>
            <div className="container-fluid">
                <h4 className='features-heading'>Features</h4>
                <div className="features-wrapper">
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <div className="step-into-what-feels-good">
                            <h2>Step Into What Feels Good</h2>
                            <h4>Cause everyone should know the feeling of running in that perfect pair.</h4>
                            <a href="/">Find Your Shoe</a>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Features;