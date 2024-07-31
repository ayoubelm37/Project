import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import './index.css';
import FeaturedLocations from './components/FeaturedLocations';

function App() {
  return (
    <div className="Container">
      <div className="w-full h-full font-poppins bg-gray-100 ">
        <Header />
        <Hero />
        <FeaturedLocations />
      </div>
    </div>
  );
}

export default App;
