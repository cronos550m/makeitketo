import './main.css';
import React from 'react';
import { SliderData } from '../Slider/SliderData';
import Slider from '../Slider/Slider'
import Info from '../Info/Info.js'
import Sections from '../Sections/Sections.js'
import Gift from '../Gifts/Gifts.js';
import Frommakeit from '../Frommakeit/Frommakeit.js';

const line={
  border: 0,
  height: 1,
  width: '86%',
  backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))'
}

function Main() {
  return (
    <div className="main">
      <Slider slides={SliderData}/>

      <Info />
      <div style={line}>
      </div>
      <Sections />
      <div style={line}>
      </div>
      <Gift />
      <div style={line}>
      </div>
      <Frommakeit />
    </div>
  );
}

export default Main;