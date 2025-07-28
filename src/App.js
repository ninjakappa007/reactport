import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import ContactMe from './components/ContactMe';

function App() {
  return (
    <div>
      <div className='overflow-x-hidden w-full h-full mb-10'>
        <Navbar/>
        <Main/>
        <TechStack/>
        <Experience/>
        <Certificates/>
        {/*<Projects/>*/}
        <ContactMe/>
      </div>
    </div>
  );
}

export default App;
