import Navbar from './navbar';
import './index.css';
import About from './aboutus';
import Footer from './footer';
import Card from './card.jsx'

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <div className="content">
        <About/>
        <Card/>
        <br/>
        <br/>
        <Footer/>
      </div>
      </div>
  );
}

export default App;
