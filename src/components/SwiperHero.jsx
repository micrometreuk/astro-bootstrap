import React from 'react';

function SwiperHero() {
  return (
    <>
          <div>
        <div
          id="heroCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/images/carousel/carousel.webp" className="img-fluid" alt="laptop " loading="eager"/>
            </div>
            <div className="carousel-item ">
              <img src="/images/carousel/carousel3.webp" className="img-fluid" alt="server " loading="eager" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SwiperHero;