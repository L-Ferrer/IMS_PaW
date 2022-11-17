import { useState, useEffect } from 'react'
import { motion, useMotionValue, animate } from "framer-motion"
import './Background.css'

function Background() {
    return(
        <>
        <div className='bg-container'>
            <div className="left"></div>
            <div className="right"></div> 
        </div>
        </>
    )
}

export default Background