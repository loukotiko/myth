import React from "react";
import OwlCarousel from "react-owl-carousel";
import { NavLink } from "react-router-dom";

export default function Hero({ carousel }) {
  return (
    <section className="hero-section">
      <OwlCarousel
        className="hero-items owl-carousel"
        loop
        margin={0}
        nav
        navText={[
          '<i class="arrow_carrot-left"></i>',
          '<i class="arrow_carrot-right"></i>'
        ]}
        dots
        items={1}
        animateOut="fadeOut"
        animateIn="fadeIn"
        smartSpeed={1200}
      >
        {carousel.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            className="single-hero-item set-bg"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="hero-text">
                    <h2>{slide.line1}</h2>
                    <h1>{slide.line2}</h1>
                    {slide.url && (
                      <NavLink to={slide.url} className="primary-btn">
                        {slide.button}
                      </NavLink>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </OwlCarousel>
    </section>
  );
}
