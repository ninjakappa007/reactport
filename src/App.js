import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import ContactMe from './components/ContactMe';

function App() {
  return (
    <div>
    {/* <h1 className='lg:hidden text-3xl flex justify-center my-auto h-full w-full'>Sorry this is desktop only..</h1> */}

      <div className='overflow-x-hidden w-full h-full mb-10'>
        <Navbar/>
        <Main/>
        <Projects/>
        <TechStack/>
        <ContactMe/>
      </div>

    </div>
  );
}

export default App;
