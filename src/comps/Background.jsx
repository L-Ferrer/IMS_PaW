import { useState, useEffect } from 'react'
import { motion, useMotionValue, animate } from "framer-motion"
import '../css/Background.css'
import split from '/split.png'

function Background() {
    return(
        <>
        
        <div className='bg-container'>
            <img className="bg" src={split} ></img>
        </div>
        <div className='space'></div>
        </>
    )
}

export default Background