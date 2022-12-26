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
                            Hi! My name is Kikki and I'm studying Computer Science 
                            at the University of British Columbia. I'm also a freelance
                            self-taught artist who owns an Etsy shop called KContents. 
                            I love combining my art and tech skills to produce cool
                            products! Feel free to contact me about art commissions 
                            and my CS background.                  
                        </p>
                    </div>

                    <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Visual Art</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage canva"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Web Development</h3>
                                <span className="skills__number">70%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">QA Engineer</h3>
                                <span className="skills__number design">75%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage qa__tester"></span>
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