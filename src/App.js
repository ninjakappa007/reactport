import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Skills from './components/Skills';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <div className='overflow-x-hidden w-full h-full mb-10'>
        <Navbar/>
        <Main/>
        <TechStack/>
        <Experience/>
        <Skills/>
        <ContactMe/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
