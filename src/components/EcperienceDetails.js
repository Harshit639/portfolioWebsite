import React from 'react'
// import { Accordion, AccordionItem } from '@szhsin/react-accordion';
// import Accordion from 'react-bootstrap/Accordion';
import WithHeaderStyledExample from './ExperiencweCard';
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import Accordion from "@material-ui/core/Accordion";
// import AccordionDetails from "@material-ui/core/AccordionDetails";
// import Typography from "@material-ui/core/Typography";
// import AccordionSummary from "@material-ui/core/AccordionSummary";

import { Accordion,AccordionDetails,AccordionSummary,Typography } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';


export default function ExperienceDetails() {
  return (
    <section>
    <Accordion style={{ borderBottom: "1px solid white", }}  >
        <AccordionSummary expandIcon={<ExpandMore sx={{ color: "white" }}  />}aria-controls="panel1a-content" id='accitem' >
          <Typography style={{ fontWeight: 'bold', fontSize:"1rem",}}>
            Work Experience
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor:'black', display:'flex', flexDirection:'column', alignItems:'center'}}>
          <WithHeaderStyledExample companyname="Reflow Technologies Ltd." skill1="Leading the design and development team for enterprise-level Iot based applications for Chemical Industries Automation" skill2="Led the development of several products Infinity Product line, using the latest technologies of React Native,Python,JavaScript and Expo." small="Reflow" link="https://reflowtech.in" />
          {/* <Typography>Greetings of the day :)</Typography> */}
        </AccordionDetails>
      </Accordion>


      <Accordion style={{ borderBottom: "0.5px solid white"}}  >
        <AccordionSummary expandIcon={<ExpandMore sx={{ color: "white" }} />}aria-controls="panel1a-content" id='accitem' >
          <Typography style={{ fontWeight: 'bold', fontSize:"1rem",}}>
            Internships
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor:'black', display:'flex', flexDirection:'column', alignItems:'center'}}>
          <WithHeaderStyledExample companyname="Climec Labs" skill1="Worked on the development of app for controlling Aerem Device(MQTT,Firebase,React Native)" skill2="Worked on App Development projects using Java and Kotlin." small="ClimecLabs" link="http://www.climeclabs.com/"/>
          <WithHeaderStyledExample companyname="Waveforms Labs" skill1="Assisted in the development of the new website." skill2="Worked on the creation of a new Firebase database to increase overall efficiency and transparency." small="Waveforms Labs" link='https://www.waveformlabs.in/' />
          {/* <Typography>Greetings of the day :)</Typography> */}
        </AccordionDetails>
      </Accordion>
   

    </section>
  )
}
