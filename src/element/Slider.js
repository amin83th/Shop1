import React from "react";
// import { Slide } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css';
import slider1 from "../images/slider/0_ey6drJha0Jol63fM.jfif";
import slider2 from "../images/slider/etw5ahwcfttkqikxbfg3.jpg";
import slider3 from "../images/slider/1.jpg";
import slider4 from "../images/slider/23 Animals Who Are Definitely Wondering _How Did I Get Here__.jfif";
import slider5 from "../images/slider/25 Dog Cross Breeds That Are So Cute You’ll Immediately Want a Mutt.jfif";
import classes from "./Slider.module.css";
import { Carousel } from "3d-react-carousal";
let slides = [
  <div className={classes.first}>
    <img src={slider1} alt="1" />
  </div>,
  <div className={classes.secend}>
    <img src={slider2} alt="2" />
  </div>,
  <div className={classes.therd}>
    <img src={slider3} alt="3" />
  </div>,
  <div className={classes.therd}>
    <img src={slider4} alt="4" />
  </div>,
  <div className={classes.therd}>
    <img src={slider5} alt="5" />
  </div>,
];
function Home() {
  return (
    //   <div className={classes.all}>
    //     <Slide>
    //       <div className={classes.first}>
    //         <div>
    //           <img src={slider1} />
    //         </div>
    //       </div>
    //       <div className={classes.secend}>
    //         <div >
    //           <img src={slider2} />
    //         </div>
    //       </div>
    //       <div className={classes.therd}>
    //         <div>
    //           <img src={slider3} />
    //         </div>
    //       </div>
    //     </Slide>
    //   </div>
    <div className={classes.all}>
      <Carousel slides={slides} autoplay={false} interval={500} />
    </div>
  );
}
export default Home;
