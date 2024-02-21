import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import ContactMe from './components/ContactMe';
import Experience from './components/Experience';

function App() {
  return (
    <div>
      <div className='overflow-x-hidden w-full h-full mb-10'>
        <Navbar/>
        <Main/>
        <Projects/>
        <TechStack/>
        <Experience/>
        <ContactMe/>
      </div>
    </div>
  );
}

export default App;
