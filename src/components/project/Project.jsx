import React from 'react'
import './Project.css'
// import firstp from '../../assets/izzyDapp.png'
import tictac from '../../assets/tic-tac-toe.png'
import whiteDapp from '../../assets/whitelistDapp.png'
import zuri from '../../assets/zuri2clone.png'
import crypto from '../../assets/cryptosearch.png'
import gym from '../../assets/gym.png'
import nft from '../../assets/nftcollection.png'
import afrigrub from '../../assets/afrigrub.png'
// import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'

const proTop={
  offscreen:{y: -50,opacity: 0,display: 'none'},
  onscreen:{ y: 0,opacity: [0, 0.2, 0.5, 0.7, 1], display: 'block', transition: { duration: 1, delay: 0.9, type: 'spring', bounce: 0.2}}
}
const proSub={
  offscreen:{y: -30,opacity: 0,display: 'none'},
  onscreen:{ y: 0,opacity: [0, 0.2, 0.5, 0.7, 1], display: 'block', transition: { duration: 1.5, delay: 1, type: 'spring'}}
}

const Project = () => {
  return (
    <div className='project' id='project'>
      <div className="project-container">
        <motion.div className="project-header"
          initial={'offscreen'}
          whileInView={'onscreen'}
          viewport={{once:true, amount:0.7}}
          transition={{staggerChildren:2}}
        >
          <motion.h1 variants={proTop}>projects</motion.h1>
          <motion.p variants={proSub}>Here are come of my project i have done over my years of development. (including this website)</motion.p>
        </motion.div>
        <motion.div className="projects"
          initial={'offscreen'}
          whileInView={'onscreen'}
          viewport={{once:true, amount:0.7}}
          transition={{staggerChildren:2}}
        >
          <motion.a variants={proSub} href='https://afrigrub.com/' target='_blank' rel='noreferrer' className="main-pro">
            <img src={afrigrub} alt="afri-gurb" />
          </motion.a>
          <motion.a variants={proSub} href='https://java-script-project-five.vercel.app/' target='_blank' rel='noreferrer' className="main-pro">
            <img src={tictac} alt="tic tac toe" />
          </motion.a>
          <motion.a variants={proSub} href='https://whitelist-dapp-0.vercel.app/' target='_blank' rel='noreferrer' className="main-pro">
            <img src={whiteDapp} alt="whitelistDapp" />
          </motion.a>
          <motion.a variants={proSub} href='https://zuri-clone.vercel.app/' target='_blank' rel='noreferrer'  className="main-pro">
            <img src={zuri} alt="zuri clone" />
          </motion.a>
          <motion.a variants={proSub} href='https://crypto-search-eta.vercel.app/' target='_blank' rel='noreferrer' className="main-pro">
            <img src={crypto} alt="cypto search" />
          </motion.a>
          <motion.a variants={proSub} href='https://gym-api-sigma.vercel.app/' target='blank' rel='noreferrer' className="main-pro">
            <img src={gym} alt="gym app" />
          </motion.a> 
        </motion.div>
        {/* <motion.a href="https://github.com/izzylogo" target='_blank' rel='noreferrer' className='view-more'
          initial={{x: '-100vh',opacity: 0,display: 'none'}}
          animate={{x: 0,opacity: [0, 0.2, 0.5, 1], display: 'block'}}
          transition={{ duration: 1, delay: 0.7, bounce: 0.5 }}
          viewport={{once: true, amount: 0.6}}
        >
          View More!
        </motion.a> */}
      </div>
    </div>
  )
}

export default Project