import logo from "./assets/logo.png"
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Resume from './components/resume/Resume';
import { Blog } from './components/blog/Blog';

function App() {
  return (
    <>
      <Sidebar />
      <main className='main'>
        <Home />
        <main className='others'>
          <About />
          <Blog />
          <Resume />
        </main>
      </main>
    </>
  );
}

export default App;
