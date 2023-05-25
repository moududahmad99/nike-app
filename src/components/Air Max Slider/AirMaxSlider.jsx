import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Style.css'

const AirMaxSlider = () => {
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };

    function PrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={`${className} custom-prev-arrow`}
                style={{ ...style, display: 'block' }}
                onClick={onClick}
            >
                Previous
            </div>
        );
    }

    function NextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={`${className} custom-next-arrow`}
                style={{ ...style, display: 'block' }}
                onClick={onClick}
            >
                Next
            </div>
        );
    }
    return (
        <React.Fragment>
            <div id="air-max-slider">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h4>Best of Air Max</h4>
                        </div>
                    </div>
                    <div className="row">
                        <Slider {...settings} className='text-center'>
                            <div className="col-lg-4">
                                <div className='air-max-slider--inner text-start'>
                                    <picture>
                                        <img src="./assets/AirMaxSlider3.png" alt="AirMaxSlider1" />
                                    </picture>
                                    <div className="air-max-slider--inner--text">
                                        <div className="air-max-slider--inner--text--left">
                                            <h5>Nike Air Max Pulse</h5>
                                            <p>Women's Shoes</p>
                                        </div>
                                        <div className="air-max-slider--inner--text--right">
                                            <h6>$199.44</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className='air-max-slider--inner text-start'>
                                    <picture>
                                        <img src="./assets/AirMaxSlider2.png" alt="AirMaxSlider1" />
                                    </picture>
                                    <div className="air-max-slider--inner--text">
                                        <div className="air-max-slider--inner--text--left">
                                            <h5>Nike Air Max Pulse</h5>
                                            <p>Women's Shoes</p>
                                        </div>
                                        <div className="air-max-slider--inner--text--right">
                                            <h6>$199.44</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className='air-max-slider--inner text-start'>
                                    <picture>
                                        <img src="./assets/AirMaxSlider3.png" alt="AirMaxSlider1" />
                                    </picture>
                                    <div className="air-max-slider--inner--text">
                                        <div className="air-max-slider--inner--text--left">
                                            <h5>Nike Air Max Pulse</h5>
                                            <p>Women's Shoes</p>
                                        </div>
                                        <div className="air-max-slider--inner--text--right">
                                            <h6>$199.44</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className='air-max-slider--inner text-start'>
                                    <picture>
                                        <img src="./assets/AirMaxSlider2.png" alt="AirMaxSlider1" />
                                    </picture>
                                    <div className="air-max-slider--inner--text">
                                        <div className="air-max-slider--inner--text--left">
                                            <h5>Nike Air Max Pulse</h5>
                                            <p>Women's Shoes</p>
                                        </div>
                                        <div className="air-max-slider--inner--text--right">
                                            <h6>$199.44</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>

                </div>
            </div>
        </React.Fragment>
    );
};

export default AirMaxSlider;
