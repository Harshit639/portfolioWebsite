
import './App.css';
import {NavBar} from './components/navbar'
import { Banner} from './components/banner';
import { Skills } from './components/skills';
import { Projects } from './components/projects';
import { Contact } from './components/contact';
import { Footer } from './components/footer';
import Education from './components/Education';
import 'bootstrap/dist/css/bootstrap.min.css'
import Experience from './components/Experience';
import ExperienceDetails from './components/EcperienceDetails';
import React,{useState,useEffect} from 'react';

function App() {
  const [isLoading, setLoading] = useState(true);
  
  function someRequest() { //Simulates a request; makes a "promise" that'll run for 2.5 seconds
    return new Promise(resolve => setTimeout(() => resolve(), 5000));
  } 

  useEffect(() => {
    someRequest().then(() => {
      const loaderElement = document.querySelector(".loader-container");
      console.log(loaderElement)
      if (loaderElement) {
        loaderElement.remove();
        console.log("fsd")
        setLoading(false);
      }
    });
  },[]);
  console.log(isLoading)
  if (isLoading) { //
    return 
  }
  return (
    <div className="App">
      <NavBar></NavBar>
      <Banner></Banner>
      <Skills></Skills>
      <Education></Education>
      <Experience/>
      <ExperienceDetails/>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
