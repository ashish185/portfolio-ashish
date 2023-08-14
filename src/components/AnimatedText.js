import { motion } from 'framer-motion';
import React from 'react'

const quote={
  initial:{
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08 // delay the each word by 0.08 sec
    }
  }
};

const singleWord={
  initial:{
    opacity:0,
    y:50 //Initially we want each word down.
  },
  animate:{
    opacity:1,
    y:0,
    transition:{
      duration: 1,
    }
  }
}

const AnimatedText = ({ text, className = '' }) => {
  return (
    <div className='w-full mx-auto py-2 flex items-center justify-center text-left overflow-hidden'>
      <motion.h1 className={`inline-block w-full text-dark font-bold capitalize text-8xl ${className}`}
        variants={quote}
        initial="initial"
        animate="animate" 
      >
        {/* {text.split("").map((word, index))}
         */}
        {text.split(" ").map((word, index) => {
          return (
            <motion.span key={word + '_' + index} className='inline-block text-left'
              variants={singleWord}
              // initial="initial" //This has to be given if we are not giving staggerChildren
              // animate="animate" 
            >
              {word}&nbsp;
            </motion.span>
           )
         })}
      </motion.h1>
    </div>
  )
}

export default AnimatedText;