import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import { Container, Row, Col } from 'react-bootstrap';
import { Slide } from "react-awesome-reveal";

export const Skills = () =>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
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

      return(
        <section className='skill' id='skills'>
            <Container>
                <Row>
                    <Col>
                    <div className='skill-bx'>
                        <h2>Skills</h2>
                    
                    <p>
                    Every skill you acquire doubles your odds of success.
                    </p>
                    <Slide triggerOnce="true" fraction={0.3}>
                    <Carousel responsive={responsive} infinite={true} className="skill-slider">
                        <div className='item'> 
                        <img src={meter1}></img>
                        <h5>Web Development</h5>
                        </div>
                        <div className='item'> 
                        <img src={meter2}></img>
                        <h5>Android Development</h5>
                        </div>
                        <div className='item'> 
                        <img src={meter3}></img>
                        <h5>iOS Development</h5>
                        </div>
                       
                    </Carousel>
                    </Slide>
                    </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp}></img>
        </section>
      )
}