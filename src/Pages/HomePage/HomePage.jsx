import React from "react";
import "./HomePage.scss";
// SwiperJs for Carousel
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

// Image imports
import headerLogo from "../../assets/header-logo.png";

// Video Imports
import bgMp4 from '../../assets/ezgif.com-gif-maker.mp4'
import bgWebM from '../../assets/ezgif.com-gif-maker.webm'

function HomePage(props) {
    return (
        <>
            <main className="homepage">
                <section className="header padding ">
                    <video id="bg-video" autoPlay loop muted playsInline>
                        <source src={bgWebM} type="video/webm" />
                        <source src={bgMp4} type="video/mp4" />
                    </video>
                    <div className="header__brand " id="tsparticles">
                        <h1 className="hidden-title">Wyvern Team</h1>
                        <img
                            src={headerLogo}
                            alt=""
                            className="header__brand__icon"
                        />
                        <p className="header__brand__description">
                            Results-driven Senior Full-Stack Developer with 6+ years of experience designing, building, and scaling high-performance web applications and enterprise systems. Strong background in React, Node.js, Java/Spring, and cloud-native architectures, with a proven record of improving system performance, modernizing legacy platforms, and delivering mission-critical features used by millions of users. Experienced in microservices, API development, accessibility compliance, CI/CD automation, and large-scale distributed systems. Recognized for clean coding practices, scalability-focused engineering, and cross-functional leadership—mentoring teams, driving testing culture, and reducing production issues. Passionate about building robust digital experiences, optimizing cloud infrastructure, and contributing to innovative, user-centric product development.
                        </p>
                    </div>
                </section>

                {/* Wrapper for background */}
                <div className="wrapper-top">
                    {/* Stats Section */}

                    <section className="stats padding">
                        <div className="stats__container">
                            <div className="stats__container__item">
                                <h2 className="stats__container__item__counter">
                                    <Ticker
                                        end={23}
                                        duration={1}
                                        suffix=" +"
                                    />
                                </h2>
                                <p className="stats__container__item__description">
                                    Unique Clients
                                </p>
                            </div>
                            <div className="stats__container__border"></div>
                            <div className="stats__container__item">
                                <h2 className="stats__container__item__counter">
                                    <Ticker
                                        end={10}
                                        duration={1}
                                        suffix=" +"
                                    />
                                </h2>
                                <p className="stats__container__item__description">
                                    Freelancers
                                </p>
                            </div>
                            <div className="stats__container__item">
                                <h2 className="stats__container__item__counter">
                                    <Ticker
                                        end={25}
                                        duration={1}
                                        suffix=" +"
                                    />
                                </h2>
                                <p className="stats__container__item__description">
                                    Projects
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Services Section */}
                    <section className="services padding">
                        <h2 className="services__heading">MY SERVICES</h2>
                        <div className="services__container">
                            <div className="services__container__item card-hover">
                                <div className="services__container__item__illustration">
                                    <img
                                        src="./web development.png"
                                        alt=""
                                        className="services__container__item__illustration__image"
                                    />
                                </div>
                                <div className="services__container__item__description">
                                    <h3 className="services__container__item__description__heading">
                                        Web Development
                                    </h3>
                                    <p className="services__container__item__description__details">
                                        Building modern, responsive websites that boost performance, usability, and reliability.
                                    </p>
                                </div>
                            </div>
                            <div className="services__container__item card-hover">
                                <div className="services__container__item__illustration">
                                    <img
                                        src="./plugin.png"
                                        alt=""
                                        className="services__container__item__illustration__image"
                                    />
                                </div>
                                <div className="services__container__item__description">
                                    <h3 className="services__container__item__description__heading">
                                        Plugin Development
                                    </h3>
                                    <p className="services__container__item__description__details">
                                        Expert plugin development delivering seamless features and optimized performance.
                                    </p>
                                </div>
                            </div>
                            <div className="services__container__item card-hover">
                                <div className="services__container__item__illustration">
                                    <img
                                        src="./minecraft configuration.png"
                                        alt=""
                                        className="services__container__item__illustration__image"
                                    />
                                </div>
                                <div className="services__container__item__description">
                                    <h3 className="services__container__item__description__heading">
                                        Minecraft Configuration
                                    </h3>
                                    <p className="services__container__item__description__details">
                                        Custom Minecraft configurations tailored for smooth servers and balanced gameplay.
                                    </p>
                                </div>
                            </div>
                            <div className="services__container__item card-hover">
                                <div className="services__container__item__illustration">
                                    <img
                                        src="./Discord Bot.png"
                                        alt=""
                                        className="services__container__item__illustration__image"
                                    />
                                </div>
                                <div className="services__container__item__description">
                                    <h3 className="services__container__item__description__heading">
                                        Discord Bot Development
                                    </h3>
                                    <p className="services__container__item__description__details">
                                        Custom Discord bots with smart features, clean code, and reliable performance.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Features Section */}
                <section className="features padding">
                    <h2 className="features__heading">MY FEATURES</h2>
                    <div className="features__container">
                        <div className="features__container__item card-hover">
                            <img
                                src="./quality.png"
                                alt=""
                                className="features__container__item__icon"
                            />
                            <h3 className="features__container__item__heading">
                                Quality
                            </h3>
                            <p className="features__container__item__details">
                                Quality-first approach ensuring reliable performance, clean execution, and durability.
                            </p>
                        </div>
                        <div className="features__container__item card-hover">
                            <img
                                src="./AFFORDABLE.png"
                                alt=""
                                className="features__container__item__icon"
                            />
                            <h3 className="features__container__item__heading">
                                Affordable
                            </h3>
                            <p className="features__container__item__details">
                                Affordable pricing without sacrificing quality, speed, or reliability.
                            </p>
                        </div>
                        <div className="features__container__item card-hover">
                            <img
                                src="./EFFICIENT.png"
                                alt=""
                                className="features__container__item__icon"
                            />
                            <h3 className="features__container__item__heading">
                                Efficient
                            </h3>
                            <p className="features__container__item__details">
                                Efficient solutions built for speed, reliability, and smooth performance.
                            </p>
                        </div>
                        <div className="features__container__item card-hover">
                            <img
                                src="PROFESSIONAL.png"
                                alt=""
                                className="features__container__item__icon"
                            />
                            <h3 className="features__container__item__heading">
                                Professional
                            </h3>
                            <p className="features__container__item__details">
                                Innovative full-stack engineer delivering scalable, high-impact solutions.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Reviews Section */}
                <section className="reviews padding">
                    <h2 className="reviews__heading">MY REVIEWS</h2>

                    <div className="reviews__carousel">
                        <img
                            src="./btn-prev.png"
                            alt="btn-prev"
                            className="prev"
                        />
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            slidesPerGroup={1}
                            loop={true}
                            loopFillGroupWithBlank={true}
                            navigation={{
                                nextEl: ".next",
                                prevEl: ".prev",
                            }}
                            modules={[Navigation]}
                            className="mySwiper"
                            breakpoints={{
                                // when window width is >= 768px
                                768: {
                                    slidesPerView: 2,
                                },
                            }}
                        >
                            <SwiperSlide>
                                <div className="reviews__carousel__item">
                                    <div className="reviews__carousel__item__stars">
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                    </div>
                                    <p className="reviews__carousel__item__details">
                                        He consistently delivers clean, scalable solutions and raises the technical bar for every project. His ability to diagnose and optimize complex systems is unmatched.
                                        He
                                    </p>
                                    <h2 className="reviews__carousel__item__name">
                                        Jason
                                    </h2>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                {" "}
                                <div className="reviews__carousel__item">
                                    <div className="reviews__carousel__item__stars">
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                    </div>
                                    <p className="reviews__carousel__item__details">
                                        He Working with him is a masterclass in modern full-stack engineering. He brings clarity to ambiguity, mentors teammates with patience, and always ships reliable, production-ready code.
                                    </p>
                                    <h2 className="reviews__carousel__item__name">
                                        Mary
                                    </h2>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                {" "}
                                <div className="reviews__carousel__item">
                                    <div className="reviews__carousel__item__stars">
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                    </div>
                                    <p className="reviews__carousel__item__details">
                                        He blends strong architectural thinking with hands-on coding expertise. He improves performance, enhances user experience, and elevates team productivity wherever he works.
                                    </p>
                                    <h2 className="reviews__carousel__item__name">
                                        Jaxon
                                    </h2>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                {" "}
                                <div className="reviews__carousel__item">
                                    <div className="reviews__carousel__item__stars">
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                    </div>
                                    <p className="reviews__carousel__item__details">
                                        Few developers combine technical depth and communication skills like he. He solves problems quickly, collaborates effortlessly, and consistently delivers results that exceed expectations.
                                    </p>
                                    <h2 className="reviews__carousel__item__name">
                                        Tomas
                                    </h2>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        <img src="./btn-next.png" alt="" className="next" />
                    </div>
                    <a
                        href="https://discord.com"
                        target="_blank"
                        className="btn btn-primary"
                    >
                        Join My Discord
                    </a>
                </section>
            </main>
        </>
    );
}
import "./HomePage.scss";
import Ticker from "../../components/Ticker/Ticker";

export default HomePage;
