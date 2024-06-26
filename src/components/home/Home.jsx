import React from 'react';
import "./home.css";
import Me from "../../assets/pfp.png";
import HeaderSocials from './HeaderSocials';
import Shapes from './Shapes';

const Home = () => {
    return <section className="home container" id="home">
        <div className="intro">
            <img src={Me} alt="" className="home__img" />
            <h1 className="home__name">Kikki Cheung</h1>
            <span className="home__education">CS Major, Certified Tester, Freelance Artist</span>

            <HeaderSocials />

            <Shapes />
        </div>
    </section>
}

export default Home;