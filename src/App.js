
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

function App() {
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
