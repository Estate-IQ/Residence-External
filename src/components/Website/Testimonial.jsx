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
                  <img src={Images.img5} alt="" />
                </div>
                <div className="handleText">
                  <h5>Extraordinarily easy to use product.</h5>
                  <h6>Obehi Okosun</h6>
                  <p>
                    Managing Director, Cambridge Broadband Network Africa
                    Limited
                  </p>
                </div>
              </PerSlide>
            </div>
            <div>
              <PerSlide>
                <div className="handleImg">
                  <img src={Images.img3} alt="" />
                </div>
                <div className="handleText">
                  <h5>
                    I recommend this for all estates.I found it really easy to
                    use
                  </h5>
                  <h6>Tosin Alo</h6>
                  <p>
                    Managing Director, Cambridge Broadband Network Africa
                    Limited
                  </p>
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
      max-width: 350px;
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
