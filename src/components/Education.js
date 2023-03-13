import React from 'react';
import { Container,Col,Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import EditIcon from '@mui/icons-material/Edit';
import { Slide } from 'react-awesome-reveal';

function Education(){

    return(
        <section className='education' id="">
        <Container>
             
             <h1 >Education</h1>
             <p className='educationquote'>All things are possible because anything can be learned.</p>
        
             
            <Row className="align-items-center">
        <Col xs={12} md={12} xl={6}  >
        <Slide triggerOnce="true" >
            
        <Card  id='cardedu' border="dark" style={{ width: '90%', marginTop: '3rem', marginLeft:'4%' }}>
        <Card.Header id="cardheader">
        <p>SRM Unversity</p> 
        <p>2020-</p>
        </Card.Header>
        <Card.Body className='cardbody'>
          <Card.Title className='cardtitle'>B.Tech. in Computer Engineering</Card.Title>
          <Card.Text className='cardtext'>
          <EditIcon/>
          CGPA: 9.7
          </Card.Text>
          <Card.Text className='cardtext'>
          <EditIcon/>
          I have studied various core Computer Science subjects like Data Structures, Algorithms, Operating Systems.
          </Card.Text>
          <Card.Text className='cardtext hidden-mobile'>
          <EditIcon/>
          I actively engage with various communities and grow and learn with them.
          </Card.Text>
        </Card.Body>
      </Card>
      </Slide>
      <br />

      </Col>
      <Col xs={12} md={12} xl={6}  >
      <Slide direction='right' triggerOnce="true">

      <Card  id='cardedu' border="dark" style={{ width: '90%', marginTop: '3rem', marginLeft:'4%' }}>
      <Card.Header id="cardheader2" >
        <p>DPS, Lucknow</p> 
        <p>2006-2020</p>
        </Card.Header>
        <Card.Body  className="cardbody">
          <Card.Title className='cardtitle'>10th & 12th Standard</Card.Title>
          <Card.Text className='cardtext'>
          <EditIcon/>
          Passed with distinction (92.4 % in 10th standard /  93.2 % in 12th Standard)
          </Card.Text>
          <Card.Text className='cardtext'>
          <EditIcon/>
          School Sports Captain and prefect for 4 years.
          </Card.Text>
          <Card.Text className='cardtext hidden-mobile'>
          <EditIcon/>
          Played for the State and National basketball Team for three years.
          </Card.Text>
          
          
        </Card.Body>
      </Card>
      </Slide>
      <br />
                
              

          </Col>
            </Row>
        </Container>

        </section>

    )
}

export default Education;