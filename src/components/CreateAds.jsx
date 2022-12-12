import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Images } from "../assets/images/Images";
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
        <HandleCarousel className="handleCarouselBanner">
          <Slider {...settings} className="handleCarousel">
            <div>
              <PerSlide>
                <div className="handleImg">
                  <img
                    src="https://images.unsplash.com/photo-1612040866046-919238fb5544?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
                    alt=""
                  />
                  {/* <img src={Images.blog2} alt="" /> */}
                  <span>Advert</span>
                </div>
                <div className="handleText">
                  <h2>Delight Confetionaries</h2>
                  <p>
                    we are experts at making your favorite confectionaires. Book
                    us for your events and functions as we guarantee quality and
                    efficiency
                  </p>
                  <button className="important-btn">Make Inquiry</button>
                </div>
              </PerSlide>
            </div>
            <div>
              <PerSlide>
                <div className="handleImg">
                  <img
                    src="https://images.unsplash.com/photo-1517840933437-c41356892b35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt=""
                  />
                  <span>Advert</span>
                </div>
                <div className="handleText">
                  <h2>Delight Confetionaries</h2>
                  <p>
                    we are experts at making your favorite confectionaires. Book
                    us for your events and functions as we guarantee quality and
                    efficiency
                  </p>
                  <button className="important-btn">Make Inquiry</button>
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
  //   .slick-initialized .slick-slide,
  //   .slick-slider .slick-track,
  //   .slick-active,
  //   .slick-current {
  //     width: auto !important;
  //   }
  .slick-dots li button:before {
    font-size: 15px;
  }
  .slick-dots {
    left: 0;
    bottom: -5px !important;
    li {
      button {
        color: #92b0fc;
      }
    }
  }
  .handleCarousel {
    background: #ffffff;

    border: 2px solid #e1e1e1;
    border-radius: 5px;
    padding: 10px;
    padding-bottom: 50px;
  }
  .handleText {
    padding: 20px 15px;
    h2 {
      font-size: 25px;
      font-weight: 700;
      margin-bottom: 10px;
      line-height: 29px;
      letter-spacing: -0.06em;
      text-align: left;
    }
  }
`;
let PerSlide = styled.div`
  background: #f6f6f6;
  border: 1px solid #999999;
  border-radius: 5px;
  margin: 5px 10px;
  .handleImg {
    position: relative;
    height: 250px;
    overflow: hidden;
    img {
      width: 100%;
      object-fit: contain;
    }
    span {
      background: #ffffff;
      border: 1px solid #545454;
      border-radius: 5px;
      font-size: 18px;
      padding: 5px 10px;
      position: absolute;
      top: 10px;
      left: 10px;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: 0em;
      text-align: left;
    }
  }
`;
