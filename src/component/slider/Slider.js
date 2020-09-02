import React from "react";
import Box from "@material-ui/core/Box";

import image1 from '../../assets/img.png';
import image2 from '../../assets/img2.png';
import image3 from '../../assets/img3.png';
import '../../style/Slider.css';

const Slider = () => {

  function backgroundScheduler_1() {
    setTimeout(() => {
      document.querySelector(".img1").style.opacity = 1;
      document.querySelector(".img2").style.opacity = 0;
      document.querySelector(".img3").style.opacity = 0;
      order(["-3", "-1", "-2"], () => { backgroundScheduler_2() }, 1000);
    }, 3000);
  }

  function backgroundScheduler_2() {
    setTimeout(() => {
      document.querySelector(".img1").style.opacity = 0;
      document.querySelector(".img2").style.opacity = 1;
      document.querySelector(".img3").style.opacity = 0;
      order(["-2", "-3", "-1"], () => { backgroundScheduler_3() }, 1000);
    }, 3000);
  }

  function backgroundScheduler_3() {
    setTimeout(() => {
      document.querySelector(".img1").style.opacity = 0;
      document.querySelector(".img2").style.opacity = 0;
      document.querySelector(".img3").style.opacity = 1;
      order(["-1", "-2", "-3"], () => { backgroundScheduler_1() }, 1000);
    }, 3000);
  }

  function order(array, callback, time) {
    setTimeout(() => {
      document.querySelector(".img1").style.zIndex = array[0];
      document.querySelector(".img2").style.zIndex = array[1];
      document.querySelector(".img3").style.zIndex = array[2];
      callback();
    }, time);
  }

  React.useEffect(() => {
    document.querySelector(".img1").style.opacity = 1;
    document.querySelector(".img2").style.opacity = 0;
    document.querySelector(".img3").style.opacity = 0;
    backgroundScheduler_2();
  }, []);

  return (
    <div class="background-container">
      <img src={image1} alt="Logo" class="background-image img1" />
      <img src={image2} alt="Logo" class="background-image img2" />
      <img src={image3} alt="Logo" class="background-image img3" />
    </div>
  );
};

export default Slider;
