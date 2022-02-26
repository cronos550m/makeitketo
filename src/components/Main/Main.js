import './main.css';
import React from 'react';
import { SliderData } from '../Slider/SliderData';
import Slider from '../Slider/Slider'
import Info from '../Info/Info.js'
import Sections from '../Sections/Sections.js'

function Main() {
  return (
    <div className="main">
      <Slider slides={SliderData}/>
      <Info />
      <Sections />
    </div>
  );
}

export default Main;