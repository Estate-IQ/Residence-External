import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { Images } from "../../assets/images/Images";
import { HashLink } from "react-router-hash-link";

const Banner = () => {
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
    <PageBanner className="webContainer">
      <section className="pageBanner">
        <div className="grade">
          <div className="phrase">
            <h1>
              Living can be a lot <span className="fade-in-bck">simpler</span>
              and
              <span className="fade-in-bck"> intuitive</span>
            </h1>
            <p>For Estate Managers & Residents within Gated Communities</p>
          </div>

          <div className="ctaButtons">
            <Link to="/get-started">
              <button className="important-btn">Get Started</button>
            </Link>
            <HashLink to="/#Subscribe">
              <button className="outlined-btn">Get the App</button>
            </HashLink>
          </div>
        </div>
        <Slider {...settings} className="handleCarousel imgBanner">
          {/* <div className=""> */}
          <div className="forTransition">
            <img src={Images.banner} alt="" />
          </div>
          <div className="forTransition">
            <img
              src="https://media.istockphoto.com/id/1347495868/photo/smiling-african-american-man-wearing-glasses.jpg?b=1&s=170667a&w=0&k=20&c=CVpXibLIGjpa2_sFFgt_ejrz06ULDMZy0ylqK-VnZRU="
              alt=""
            />
          </div>
          <div className="forTransition">
            <img src={Images.banner2} alt="" />
          </div>
          {/* <div className="forTransition">
            <img src={Images.banner3} alt="" />
          </div> */}

          {/* </div> */}
        </Slider>
      </section>
    </PageBanner>
  );
};

export default Banner;

let PageBanner = styled.section`
  .ctaButtons {
  }
  .pageBanner {
    margin-top: 130px;
    .ctaButtons {
      button {
        margin-right: 20px;
        @media (max-width: 400px) {
          margin: 0;
          margin-top: 20px;
          width: 100%;
        }
      }
    }
    @media (min-width: 768px) {
      display: flex;
      justify-content: space-between;
      .grade {
        width: 50%;
      }
      .imgBanner {
        width: 40%;
      }
    }
    .imgBanner {
      img {
        width: 100%;
        object-fit: cover;
        transform: scale(1);
        transition: 1.5s;
        height: 100%;
        &:hover {
          transform: scale(1.1);
        }
      }
      @media (max-width: 420px) {
        img {
          max-height: 206px;
        }
      }
      .forTransition {
        width: 100%;
        height: 460px;
        overflow: hidden;
        @media (max-width: 1024px) {
          margin-top: 50px;
          width: 100%;
          height: 100%;
        }
      }
    }

    h1 {
      font-family: DM Sans;
      font-size: 70px;
      font-weight: 700;
      line-height: 80px;
      letter-spacing: -0.06em;
      text-align: left;
      @media (max-width: 450px) {
        font-size: 50px;
        line-height: 67px;
        span {
          font-size: 52px !important;
        }
      }
      span {
        font-family: DM Sans;
        font-size: 70px;
        font-weight: 700;
        line-height: 50px;
        letter-spacing: -0.06em;
        text-align: left;
        color: rgba(234, 203, 48, 1);
      }
    }
  }
`;
