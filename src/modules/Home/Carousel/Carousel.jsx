import React from "react";
import CarouselStyles from "./Carousel.module.scss";
import Slider from "react-slick";

export default function Carousel() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#0f4723",
          opacity: 1,
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#0f4723",
          opacity: 1,
        }}
        onClick={onClick}
      />
    );
  }
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={CarouselStyles.carousel}>
      <div className={CarouselStyles.carousel_container}>
        <div className={CarouselStyles.carousel_text}>
          <p>Popular services</p>
        </div>
        <div className={CarouselStyles.carousel_list}>
          <div>
            <Slider {...settings}>
              <div>
                <div className={CarouselStyles.carousel_list_item}>
                  <div className={CarouselStyles.inner_text}>
                    <p>Reach more customer</p>
                    <h4>Social Media</h4>
                  </div>
                  <img src="./images/social-2x.webp" alt="1" srcset="" />
                </div>
              </div>
              <div>
                <div className={CarouselStyles.carousel_list_item}>
                  <div className={CarouselStyles.inner_text}>
                    <p>Reach more customer</p>
                    <h4>Social Media</h4>
                  </div>
                  <img src="./images/seo-2x.webp" alt="2" srcset="" />
                </div>
              </div>
              <div>
                <div className={CarouselStyles.carousel_list_item}>
                  <div className={CarouselStyles.inner_text}>
                    <p>Reach more customer</p>
                    <h4>Social Media</h4>
                  </div>
                  <img src="./images/illustration-2x.webp" alt="3" srcset="" />
                </div>
              </div>
              <div>
                <div className={CarouselStyles.carousel_list_item}>
                  <div className={CarouselStyles.inner_text}>
                    <p>Reach more customer</p>
                    <h4>Social Media</h4>
                  </div>
                  <img src="./images/translation-2x.webp" alt="4" srcset="" />
                </div>
              </div>
              <div>
                <div className={CarouselStyles.carousel_list_item}>
                  <div className={CarouselStyles.inner_text}>
                    <p>Reach more customer</p>
                    <h4>Social Media</h4>
                  </div>
                  <img src="./images/data-entry-2x.webp" alt="5" srcset="" />
                </div>
              </div>
              <div>
                <div className={CarouselStyles.carousel_list_item}>
                  <div className={CarouselStyles.inner_text}>
                    <p>Reach more customer</p>
                    <h4>Social Media</h4>
                  </div>
                  <img src="./images/book-covers-2x.webp" alt="6" srcset="" />
                </div>
              </div>
              <div>
                <div className={CarouselStyles.carousel_list_item}>
                  <div className={CarouselStyles.inner_text}>
                    <p>Reach more customer</p>
                    <h4>Social Media</h4>
                  </div>
                  <img src="./images/ai-artists-2x.webp" alt="7" srcset="" />
                </div>
              </div>
              <div>
                <div className={CarouselStyles.carousel_list_item}>
                  <div className={CarouselStyles.inner_text}>
                    <p>Reach more customer</p>
                    <h4>Social Media</h4>
                  </div>
                  <img src="./images/logo-design-2x.webp" alt="8" srcset="" />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
