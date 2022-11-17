import { useState, useEffect } from 'react'
import { motion, useMotionValue, animate } from "framer-motion"
import './Background.css'
import democrats from './assets/democrats.png'
import republicans from './assets/republicans.png'

function Background() {
    return(
        <>
        <div className='bg-container'>
            <img className="left" src={democrats} ></img>
            <img className="right" src={republicans} ></img>
        </div>
        </>
    )
}

export default Background