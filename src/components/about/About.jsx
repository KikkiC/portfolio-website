import React from 'react';
import "./about.css";
import Image from "../../assets/about.jpg";
import AboutBox from './AboutBox';

const About = () => {
    return (
        <section id="about" className="about container section">
            <h2 className="section__title">About Me</h2>

            <div className="about__container grid">
                <img src={Image} alt="" className="about__img" />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            Hi! My name is Kikki and I'm a Computer Science graduate from the University of British Columbia. I am also an ISTQB-certified tester and a freelance self-taught artist, so I love using both my art and tech skills to produce cool products! Feel free to reach out if you’d like to collaborate, commission artwork, or chat about my CS background.            
                        </p>
                    </div>

                    <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Software Testing/QA</h3>
                                <span className="skills__number">85%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage qa"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Visual Art</h3>
                                <span className="skills__number">75%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage art"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Web Development</h3>
                                <span className="skills__number">70%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage web__dev"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">HCI Design</h3>
                                <span className="skills__number">70%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage hci"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <AboutBox />
        </section>
    )
}

export default About;