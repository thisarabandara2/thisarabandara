import meter1 from "../assets/img/react-svgrepo-com.svg";
import meter2 from "../assets/img/flutter-svgrepo-com.svg";
import meter3 from "../assets/img/c-svgrepo-com.svg";
import meter4 from "../assets/img/python-svgrepo-com.svg";
import meter5 from "../assets/img/java-svgrepo-com.svg";
import meter6 from "../assets/img/c-sharp-svgrepo-com.svg";
import meter7 from "../assets/img/c-plusplus-svgrepo-com.svg";
import meter8 from "../assets/img/icons8-spring-boot-48.png";
import meter9 from "../assets/img/html-5-svgrepo-com.svg";
import meter10 from "../assets/img/css-3-svgrepo-com.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>As an undergraduate student, I have developed a diverse set of skills through my coursework and personal projects. My academic journey has equipped me with the knowledge and experience necessary to excel in both front-end and back-end development. I am passionate about creating efficient, user-friendly applications and continuously strive to expand my expertise in full-stack development. Below are some interesting areas of my self:</p>
                        <h3 className="text-start mb-5">Familial Technologies</h3>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider carousel-1">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={meter5} alt="Image" />
                            </div>
                        </Carousel>
                        <div className="carousel-spacing"></div>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider carousel-2">
                            <div className="item">
                                <img src={meter6} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={meter7} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={meter8} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={meter9} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={meter10} alt="Image" />
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
