import React from 'react'

export const AboutBox = () => {
  var currYear = new Date().getFullYear();
  var travelGap = currYear - 2025;

  return (
    <div className="about__boxes grid">
        <div className="about__box">
            <i className="about__icon icon-fire"></i>

            <div>
                <h3 className="about__title">135+</h3>
                <span className="about__subtitle">Kdramas watched</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-plane"></i>

            <div>
                <h3 className="about__title">{travelGap}</h3>
                <span className="about__subtitle">Years since my last trip</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-game-controller"></i>

            <div>
                <h3 className="about__title">7,500+</h3>
                <span className="about__subtitle">Games on WOTB</span>
            </div>
        </div>
    </div>
  )
}

export default AboutBox;