import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Images } from "../../assets/images/Images";
import styled from "styled-components";

export default class Responsive extends Component {
  render() {
    const settings = {
      dots: true,
      margin: 10,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 5000,
    };
    return (
      <>
        <HandleCarousel className="handleCarouselBanner webContainer">
          <Reviews>
            <h2>Testimonials</h2>
            <p>
              Check out what people are saying about our product and services.
            </p>
          </Reviews>
          <Slider {...settings} className="handleCarousel">
            <div>
              <PerSlide>
                <div className="handleImg">
                  <img src={Images.baseey} alt="" />
                </div>
                <div className="handleText">
                  <h5>
                    This is definitely a solution that I will recommend to
                    forward-looking estate managers and residents.{" "}
                  </h5>
                  <h6>Esu Bassey-Duke</h6>
                  <p>Treasurer, Ogudu GRA Resident Association, Lagos.</p>
                </div>
              </PerSlide>
            </div>
            <div>
              <PerSlide>
                <div className="handleImg">
                  <img src={Images.pelumi} alt="" />
                </div>
                <div className="handleText">
                  <h5>
                    It makes communication among residents and with the security
                    personnel a lot easier for us.
                  </h5>
                  <h6>Pelumi Oyedotun</h6>
                  <p>
                    Chief Executive Officer, Carnelian Realty Company Limited,
                    Lagos.{" "}
                  </p>
                </div>
              </PerSlide>
            </div>
            <div>
              <PerSlide>
                <div className="handleImg">
                  <img src={Images.john} alt="" />
                </div>
                <div className="handleText">
                  <h5>
                    We made the right decision by choosing EstateIQ as our
                    technology partner. They went beyond our expectations.
                  </h5>
                  <h6>Akinwunmi John</h6>
                  <p>Estate Developer – Cravings Parks Estates, Lagos.</p>
                </div>
              </PerSlide>
            </div>
          </Slider>
        </HandleCarousel>
      </>
    );
  }
}

let HandleCarousel = styled.section`
  margin-bottom: 30px;
  .slick-arrow {
    display: none !important;
  }
  .slick-dots li button:before {
    font-size: 15px;
  }
  .slick-dots {
    left: 0;
    // bottom: -5px !important;
    li {
      button {
        color: #eacb30;
      }
    }
  }
  .handleCarousel {
  }
  .handleText {
    margin-top: 30px;
    h2 {
      font-size: 25px;
      font-weight: 700;
      margin-bottom: 10px;
      line-height: 29px;
      letter-spacing: -0.06em;
      text-align: left;
    }
    h6 {
      font-size: 18px;
      font-weight: 700;
      margin-top: 50px;
      line-height: 24px;
      letter-spacing: 0em;
      text-align: left;
    }

    p {
      font-size: 14px;
      font-weight: 400;
      line-height: 21px;
      letter-spacing: -0.02em;
      text-align: left;
    }
    h5 {
      max-width: 100%;
      padding-top: 40px;
      font-size: 38px;
      font-weight: 700;
      line-height: 49px;
      letter-spacing: 0em;
      text-align: left;
    }
  }
`;
let PerSlide = styled.div`
  .handleImg {
    img {
      height: 381px;
      object-fit: cover;
    }
  }
  @media (min-width: 800px) {
    display: flex;
    justify-content: space-between;
    .handleImg {
      width: 45%;
    }
    .handleText {
      width: 45%;
    }
  }
`;

let Reviews = styled.section`
  text-align: center;
  margin-bottom: 50px;
  color: #fff;
  h2 {
    color: #fff;
    margin-bottom: 10px;
    font-size: 51px;
    font-weight: 700;
    line-height: 61px;
    letter-spacing: -0.06em;
    text-align: center;
  }
  p {
    text-align: center;
  }
`;
