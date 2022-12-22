import { useState, useEffect } from 'react'
import { motion, useMotionValue, animate } from "framer-motion"
import '../css/Background.css'
import democrats from '/democrats.png'
import republicans from '/republicans.png'

function Background() {
    return(
        <>
        <div className='bg-container'>
            <img className="bg_left" src={democrats} ></img>
            <img className="bg_right" src={republicans} ></img>
        </div>
        </>
    )
}

export default Background