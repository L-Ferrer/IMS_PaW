import { useState, useEffect } from 'react'
import { motion, useMotionValue, animate } from "framer-motion"
import '../css/App.css'
import '../comps/Background'
import Background from '../comps/Background'
import Content from '../comps/Content'
import { Parallax } from 'react-parallax';
import democrats_crop from '/democrats_cropped.png'
import republicans_crop from '/republicans_cropped.png'


//TODO: https://www.framer.com/developers/guides/
//TODO: https://mui.com/material-ui/react-typography/

function App() {

  return (
    <>
      <div className="navbar">
      </div>
      <Background></Background>

      <div className="back">
        <div className="left">
          <img className="img_left" src={democrats_crop} ></img>
        </div>
        <div className="right">
          <img className="img_right" src={republicans_crop} ></img>
        </div>
        <div className="content">
          <Content></Content>
        </div>
      </div>

      {
      }
      {/**
      <Parallax
          className="parallax_left"
          blur={{ min: -15, max: 15 }}
          bgImage={democrats}
          bgImageAlt="democrat_bg"
          strength={0}
          >
                <div style={{ height: '100px' }} />
        </Parallax>
  */}



    </>
  )
}

export default App
