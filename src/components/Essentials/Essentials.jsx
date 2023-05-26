import React from 'react'
import './Style.css'

const Essentials = () => {
    return (
        <React.Fragment>
            <div id="essentials-wrapper">
                <div className="container">
                    <h4 className='essentials-heading'>The Essentials</h4>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="essentials-inner">
                                <picture>
                                    <img src="./assets/Essentials1.png" alt="Essentials" />
                                </picture>
                                <div className="essentials-inner--button">
                                    <a href="##">Men's</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="essentials-inner">
                                <picture>
                                    <img src="./assets/Essentials2.png" alt="Essentials" />
                                </picture>
                                <div className="essentials-inner--button">
                                    <a href="##">Women's</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="essentials-inner">
                                <picture>
                                    <img src="./assets/Essentials3.png" alt="Essentials" />
                                </picture>
                                <div className="essentials-inner--button">
                                    <a href="##">Kid's</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Essentials