import React from 'react'
import "./blog.css";
import Image1 from "../../assets/digital.svg";
import Image2 from "../../assets/comic.svg";
import Image3 from "../../assets/fanart.svg";

export const Blog = () => {
  return <section className="blog container section" id="projects">
    <h2 className="section__title">Art Projects</h2>

    <div className="blog__container grid">
        <div className="blog__card">
            <div className="blog__thumb">
                <a href="https://drive.google.com/drive/folders/1qY9IZKAe0Mg1C8DgCbHPsQCb7ym9ah7E?usp=share_link" target="_blank"><img src={Image1} alt="" className="blog__img" id="digital" /></a>
            </div>

            <div className="blog__details">
                <h3 className="blog__title">Digital Artwork</h3>
                <div className="blog__meta">
                    <span>Work from my Etsy shop</span>
                </div>
            </div>
        </div>

        <div className="blog__card">
            <div className="blog__thumb">
                <a href="https://drive.google.com/drive/folders/1Q95kPmBzyqu8GBgVUUiTxOqpd8aYtp98?usp=share_link" target="_blank"><img src={Image2} alt="" className="blog__img" id="comics" /></a>
            </div>

            <div className="blog__details">
                <h3 className="blog__title">Creative Writing</h3>
                <div className="blog__meta">
                    <span>Work from my school courses</span>
                </div>
            </div>
        </div>

        <div className="blog__card">
            <div className="blog__thumb">
                <a href="https://drive.google.com/drive/folders/1xSvrixddIftPDSfdbS8XwgTMFFl7R0j6?usp=share_link" target="_blank"><img src={Image3} alt="" className="blog__img" id="fanart" /></a>
            </div>

            <div className="blog__details">
                <h3 className="blog__title">Fan Art</h3>
                <div className="blog__meta">
                    <span>Work from my free time</span>
                </div>
            </div>
        </div>
    </div>
  </section>
}
