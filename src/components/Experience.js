import React from 'react'
import { Container,Col,Row } from 'react-bootstrap';

function Experience(){
    return(
        <section className='experience' id="">
        <Container>
             
             <h1 className="experiencehead">Experience</h1>
             <p>The only source of knowledge is experience.</p>
            <Row className="align-items-center">
        <Col xs={12} md={7} xl={6}  >
       
     <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_96bovdur.json"  background="transparent"  speed="1"    loop  autoplay></lottie-player>
        </Col>

        <Col xs={12} md={7} xl={6}  >

        <h1 >Work, Internship and Volunteership</h1>
        <p>I have a great experience of working with these companies & creating impact, which in turn has helped me a lot to explore my skillset and gain exposure.</p>
        </Col>



            </Row>
        </Container>

            
        </section>
    )
}

export default Experience;