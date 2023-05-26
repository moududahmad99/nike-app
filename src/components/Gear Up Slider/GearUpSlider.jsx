import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Style.css';

const GearUpSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };

    function PrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={`${className} GearUpSlider-prev-arrow`}
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
                className={`${className} GearUpSlider-next-arrow`}
                style={{ ...style, display: 'block' }}
                onClick={onClick}
            >
                Next
            </div>
        );
    }

    return (
        <React.Fragment>
            <div id="gear-up-slider">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="gear-up-slider--inner">
                                <h4>Shop Men's</h4>
                                <Slider {...settings} className="text-start">
                                    <div className='gear-up--slider'>
                                        <img src="./assets/GearUpSlider1.png" alt="Slider 1 - Slide 1" />
                                        <div className="air-max-slider--inner--text">
                                            <div className="air-max-slider--inner--text--left">
                                                <h5>Nike Dri-FIT TechKnit</h5>
                                                <p>Men's Short-Sleeve Running Top</p>
                                            </div>
                                            <div className="air-max-slider--inner--text--right">
                                                <h6 className='px-3'>$149.27</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='gear-up--slider'>
                                        <img src="./assets/GearUpSlider2.png" alt="Slider 1 - Slide 2" />
                                        <div className="air-max-slider--inner--text">
                                            <div className="air-max-slider--inner--text--left">
                                                <h5>Nike Dri-FIT Challenger</h5>
                                                <p>Men's 18cm (approx.) 2-in-1 Versatile Shorts</p>
                                            </div>
                                            <div className="air-max-slider--inner--text--right">
                                                <h6 className='px-3'>$149.27</h6>

                                            </div>
                                        </div>
                                    </div>
                                    <div className='gear-up--slider'>
                                        <img src="./assets/GearUpSlider1.png" alt="Slider 1 - Slide 1" />
                                        <div className="air-max-slider--inner--text">
                                            <div className="air-max-slider--inner--text--left">
                                                <h5>Nike Dri-FIT TechKnit</h5>
                                                <p>Men's Short-Sleeve Running Top</p>
                                            </div>
                                            <div className="air-max-slider--inner--text--right">
                                                <h6 className='px-3'>$149.27</h6>

                                            </div>
                                        </div>
                                    </div>
                                    <div className='gear-up--slider'>
                                        <img src="./assets/GearUpSlider2.png" alt="Slider 1 - Slide 2" />
                                        <div className="air-max-slider--inner--text">
                                            <div className="air-max-slider--inner--text--left">
                                                <h5>Nike Dri-FIT Challenger</h5>
                                                <p>Men's 18cm (approx.) 2-in-1 Versatile Shorts</p>
                                            </div>
                                            <div className="air-max-slider--inner--text--right">
                                                <h6 className='px-3'>$149.27</h6>

                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="gear-up-slider--inner">
                                <h4>Shop Women's</h4>
                                <Slider {...settings} className="text-start">
                                    <div className='gear-up--slider'>
                                        <img src="./assets/GearUpSlider3.png" alt="Slider 1 - Slide 1" />
                                        <div className="air-max-slider--inner--text">
                                            <div className="air-max-slider--inner--text--left">
                                                <h5>Nike Run Division</h5>
                                                <p>Women's Long-Sleeve Running Top</p>
                                            </div>
                                            <div className="air-max-slider--inner--text--right">
                                                <h6 className='px-3'>$149.27</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='gear-up--slider'>
                                        <img src="./assets/GearUpSlider1.png" alt="Slider 1 - Slide 2" />
                                        <div className="air-max-slider--inner--text">
                                            <div className="air-max-slider--inner--text--left">
                                                <h5>Nike Fast</h5>
                                                <p>Women's Mid-Rise 7/8 Leggings with Pockets</p>
                                            </div>
                                            <div className="air-max-slider--inner--text--right">
                                                <h6 className='px-3'>$149.27</h6>

                                            </div>
                                        </div>
                                    </div>
                                    <div className='gear-up--slider'>
                                        <img src="./assets/GearUpSlider2.png" alt="Slider 1 - Slide 1" />
                                        <div className="air-max-slider--inner--text">
                                            <div className="air-max-slider--inner--text--left">
                                                <h5>Nike ADV Run Division</h5>
                                                <p>Women's Long-Sleeve Running Top</p>
                                            </div>
                                            <div className="air-max-slider--inner--text--right">
                                                <h6 className='px-3'>$149.27</h6>

                                            </div>
                                        </div>
                                    </div>
                                    <div className='gear-up--slider'>
                                        <img src="./assets/GearUpSlider1.png" alt="Slider 1 - Slide 2" />
                                        <div className="air-max-slider--inner--text">
                                            <div className="air-max-slider--inner--text--left">
                                                <h5>Nike Fast</h5>
                                                <p>Women's Mid-Rise 7/8 Running Leggings</p>
                                            </div>
                                            <div className="air-max-slider--inner--text--right">
                                                <h6 className='px-3'>$149.27</h6>

                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default GearUpSlider;
