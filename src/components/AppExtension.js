import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import NavbarAddendum from './Navbar Links/NavbarAddendum';
import Banner from './Banner/Banner';
import NikeAirMax from './Nike Air Max/NikeAirMax';
import AirMaxSlider from './Air Max Slider/AirMaxSlider';
import Features from './Features/Features';
import GearUpSlider from './Gear Up Slider/GearUpSlider';
import Flight from './Flight/Flight';
import Essentials from './Essentials/Essentials';
import CollectionLink from './Collection Link/CollectionLink';

export default function AppExtension() {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" />
                    <Route path="/cart" />
                </Routes>

                <NavbarAddendum />
                <Routes>
                    <Route path="/" />
                    <Route path="/Home" />
                </Routes>
            </BrowserRouter>
            <Banner/>
            <NikeAirMax />
            <AirMaxSlider />
            <Features />
            <GearUpSlider />
            <Flight />
            <Essentials />
            <CollectionLink />
        </div>
    )
}
