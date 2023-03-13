import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

import emailjs from '@emailjs/browser';
import { Slide } from "react-awesome-reveal";


export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formDetails)
    setButtonText("Sending...");
    // let response = await fetch("http://localhost:5000/contact", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json;charset=utf-8",
    //   },
    //   body: JSON.stringify(formDetails),
    // });
    
    emailjs.sendForm('service_8ep4jfp', 'template_lf3gztl', e.target, 'S0dA5FO3g3k-9hQvJ')
      .then((result) => {
        setStatus({ succes: true, message: 'Message sent successfully'});
      }, (error) => {
        setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
      });
      setButtonText("Send");
      e.target.reset()
    
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
          <Slide triggerOnce="true">
          <img  src={contactImg} alt="Contact Us"/>
          </Slide>
          </Col>
          <Col size={12} md={6}>
                <Slide direction="right" triggerOnce="true" >
                <h2>Get In Touch</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text"  placeholder="First Name" name="firstName" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text"  placeholder="Last Name" name="lastName" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email"  placeholder="Email Address" name="email"  />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" placeholder="Phone No." name="phone" />
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6"  placeholder="Message" name="message" ></textarea>
                       <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                   
                    {
                      status.message &&
                      <Col size={12} sm={12} >
                        <h3 className={status.success === false ? "danger" : "success"}>{status.message}</h3>
                      </Col>
                    }
                  </Row>
                </form>
                </Slide>
             
          </Col>
        </Row>
      </Container>
    </section>
  )
}