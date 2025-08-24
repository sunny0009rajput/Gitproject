import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import NavbarSecond from './Navbar2';
import NavbarThird from './Navbar3';
import Navbarleft from './Navbarleft';
import Navbarleftfirst from './Navbarleft1';
import Navbarleftsecond from './Navbarleft2';
import ProductCard from './card';
import GroupCard from './groopcard';

import Countup from './CountUp';
import AboutPage from './About';

function App() {
  return (
    <>
    <Navbar/>
    <NavbarSecond/>
    <NavbarThird/>
    <Navbarleft/>
    <Navbarleftfirst/>
    <Navbarleftsecond/>
    <ProductCard/>
    <GroupCard/>
    
    <Countup/>
    <AboutPage/>


    </>
  );
}

export default App;
