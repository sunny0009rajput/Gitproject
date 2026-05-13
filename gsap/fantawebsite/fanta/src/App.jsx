import { useEffect } from "react";
import "./App.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Mainpage from "./Mainpage";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // ===============================
    // HERO → BLOB SECTION ANIMATION
    // ===============================

      gsap.set("#hero-can", {
  xPercent: -50,
  yPercent: -50,
});

    const heroTL = gsap.timeline({
      scrollTrigger: {
        trigger: "#blob-section",
        start: "0% 80%",
        end: "50% 50%",
        scrub: 2,
        
      },
    });

    // FANTA CAN
    heroTL.to(
      "#hero-can",
      {
       top: "155%",
       left: "25%",
       
      },'orange');

      heroTL.to(
      "#hero-orange-slice",
      {
       top: "105%",
       left: "12%",
       rotate: "-360deg",
       scale: 1.2,
       
      },'orange');

      heroTL.to(
      "#hero-oranges",
      {
       top: "155%",
       right: "12%",
       
       scale: 0.8,
       
      },'orange');

    

    const productsTL = gsap.timeline({
      scrollTrigger: {
        trigger: "#products-section",
        start: "0% 80%",
        end: "50% 50%",
        scrub: 2,
      },
    });

    // FANTA CAN
    // productsTL.to(
    //   "#hero-can",
    //   {
    //    top: "240%",
    //    left: "50%",
    //    scaleX: 0.75,
    //    scaleY: 0.70,
    //   },"coca");

      // INITIAL POSITION

    

gsap.set("#can-cocacola", {
  x: -300,
  rotate: -20,
  opacity: 0,
});

gsap.set("#can-pepsi", {
  x: 300,
  rotate: 20,
  opacity: 0,
});




productsTL.to("#hero-can", {
  top: "240%",
  left: "50%",
  scaleX: 0.75,
  scaleY: 0.70,
}, "coca");

productsTL.to("#can-cocacola", {
  x: -180,
  rotate: 0,
  opacity: 1,
}, "coca");

productsTL.to("#can-pepsi", {
  x: 0,
  rotate: 0,
  opacity: 1,
}, "coca");

     

   
  }, []);

  return (
    <>
      <Mainpage />
    </>
  );
}

export default App;