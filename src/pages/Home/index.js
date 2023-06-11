import React from 'react';
import NavbarRouter from '../../components/Navbar/NavbarRouter';
import Banner from '../../components/Banner/Banner';
import NikeAirMax from '../../components/Nike Air Max/NikeAirMax';
import AirMaxSlider from '../../components/Air Max Slider/AirMaxSlider';
import Features from '../../components/Features/Features';
import GearUpSlider from '../../components/Gear Up Slider/GearUpSlider';
import Flight from '../../components/Flight/Flight';
import CollectionLink from '../../components/Collection Link/CollectionLink';
import Essentials from '../../components/Essentials/Essentials';
import Footer from '../../components/Footer/Footer';

function Home() {
    return (
        <div>
            <NavbarRouter />
            <Banner />
            <NikeAirMax />
            <AirMaxSlider />
            <Features />
            <GearUpSlider />
            <Flight />
            <Essentials />
            <CollectionLink />
            <Footer />
        </div>
    )
}


export default Home;