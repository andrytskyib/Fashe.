import React from "react";
import Slider from "react-slick";
import "./slickSlide.scss"
import Button from "../Button/Button";

const SlickSlider = () => {
    const settings = {
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: "slider"
    };

    return (
        <div>
            <Slider {...settings}>
                <div className="slider__background1">
                    <p className="slider__text animated">Women collection 2020</p>
                    <h1 className="slider__title">New arrivals</h1>
                    <Button
                        type="button"
                        color="white"
                    >
                        Shop now
                    </Button>
                </div>
                <div className="slider__background2">
                    <p className="slider__text animated">Women collection 2020</p>
                    <h1 className="slider__title">New arrivals</h1>
                    <Button
                        type="button"
                        color="white"
                    >
                        Shop now
                    </Button>
                </div>
                <div className="slider__background3">
                    <p className="slider__text animated">Women collection 2020</p>
                    <h1 className="slider__title">New arrivals</h1>
                    <Button
                        type="button"
                        color="white"
                    >
                        Shop now
                    </Button>
                </div>
            </Slider>
        </div>
    )
}

export default SlickSlider;
