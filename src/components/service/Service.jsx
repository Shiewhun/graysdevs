import React from 'react'
import './Service.css'
import teamwork from '../../assets/teamwork.svg'
import {motion} from 'framer-motion'


const move={
  offscreen:{x: -50,opacity: 0,display: 'none'},
 onscreen:{ x: 0,opacity: 1, display: 'block', transition: { duration: 1, delay: 0.8, type: 'spring'}}
}

const moveimg={
  offscreen:{x: -50,opacity: 0,display: 'none'},
 onscreen:{ x: 0,opacity: 1, display: 'block', transition: { duration: 1, delay: 1.2, type: 'spring'}}
}

const moveL={
  offscreen:{x: 50,opacity: 0,},
  onscreen:{ x: 0,opacity: 1, transition: { duration: 1, delay: 1.5, type: 'spring'}}
}

const moveL2={
  offscreen:{x: 50,opacity: 0,},
  onscreen:{ x: 0,opacity: 1, transition: { duration: 1, delay: 1.7, type: 'spring'}}
}

const moveL3={
  offscreen:{x: 50,opacity: 0,},
  onscreen:{ x: 0,opacity: 1, transition: { duration: 1, delay: 1.9, type: 'spring'}}
}

const Service = () => {
  return (
    <motion.div className='service' id='service'
    initial={'offscreen'}
    whileInView={'onscreen'}
    viewport={{once:true, amount:0.6}}
    transition={{staggerChildren:100}}
    >
        <motion.h2 
          variants={move}
        >
          Where we can add value
        </motion.h2>
      <div className="service-container">
        <motion.div className="service-left"
          initial={'offscreen'}
          whileInView={'onscreen'}
          viewport={{once:true, amount:0.6}}
          transition={{staggerChildren:100}}
        >
          {/* <motion.h1 variants={move}>The most creative <br /> intuitive and <br /> innovative teammate.</motion.h1> */}
          <motion.h1 variants={move}>Our teams has built solutions for some of this most difficult technical challenges business has faced. <br /> Whatever you're looking for, we can assemble the perfect team to tackle it.</motion.h1>
          <motion.img src={teamwork} alt='teamwork' variants={moveimg} />
        </motion.div>
        <motion.div className="service-right"
          initial={'offscreen'}
          whileInView={'onscreen'}
          viewport={{once:true, amount:0.6}}
          transition={{staggerChildren:100}}
        >
          <motion.div className="tab" variants={moveL}  
          >
            <h3>Tools:</h3> 
            <p>HTML, CSS, JavaScript, AngularJS, VueJS, ReactJS, NodeJS, Golang.</p>
          </motion.div>
          <motion.div className="tab" variants={moveL2}>
            <h3>Blockchain Development</h3>
            <p>Decentralized Applications, Smart Contracts, Solidity, Ethers.js</p>
          </motion.div>
          <motion.div className="tab" variants={moveL3}>
            <h3>Version Control and DevOps</h3>
            <p>Git, Mercurial, Docker AWS</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Service