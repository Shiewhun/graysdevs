import React from 'react'
import './Contact.css'
import {motion} from 'framer-motion'



const pAni={
  offscreen:{y: -100, opacity: 0},
  onscreen:{y: 0,
    opacity: [0, 0.2, 0.5, 0.8, 1],
    transition: {type: 'spring',
    bounce: 0.2,
    delay: 1.5,
    duration: 2.5}
  }
}

const p2Ani={
  offscreen:{y: -100, opacity: 0},
  onscreen:{y: 0,
    opacity: [0, 0.2, 0.5, 0.8, 1],
    transition: {type: 'spring',
    bounce: 0.2,
    delay: 1.7,
    duration: 2.5}
  }
}

const p3Ani={
  offscreen:{y: -100, opacity: 0},
  onscreen:{y: 0,
    opacity: [0, 0.2, 0.5, 0.8, 1],
    transition: {type: 'spring',
    bounce: 0.2,
    delay: 1.7,
    duration: 2.5}
  }
}


const spanAni={
  offscreen:{y: -10, opacity: 0},
  onscreen:{y: 0,
    opacity: [0.2, 1],
    transition: {type: 'spring',
    bounce: 0.2,
    delay: 1,
    duration: 1.5}
  }
}


const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact-container">
        <motion.div className="contact-header"
          initial={'offscreen'}
          whileInView={'onscreen'}
          viewport={{once:true, amount:0.3}}
          transition={{staggerChildren:0.5}}
        >
          <motion.h1 variants={spanAni}>Want to get in touch?</motion.h1>
          <motion.p variants={pAni}>Feel free to Contact US by submitting the form below and we will get back to you as soon as possible.</motion.p>
        </motion.div>
        <div className="contact-form">
          <motion.form method='POST' 
            // action='https://getform.io/f/8c64d716-ebfa-444d-bc06-b32b8d6adfe5'
            action='https://getform.io/f/118dcfc0-43ac-4c6b-bd64-6038fde28d9b'
            initial={'offscreen'}
            whileInView={'onscreen'}
            viewport={{once:true, amount:0.3}}
            transition={{staggerChildren:0.5}}
          >
            <motion.div className="send-det"
              initial={'offscreen'}
              whileInView={'onscreen'}
              viewport={{once:true, amount:0.2}}
              transition={{staggerChildren:0.8}}
            >
              <motion.div className="name am" variants={pAni}>
                <label htmlFor="name">Your Name</label>
                <input type="text" name='name' id='name' placeholder='Enter Your Name' required />
              </motion.div>
              <motion.div className="email am" variants={p2Ani}>
                <label htmlFor="email">Email Address</label>
                <input type='email' name='email' id='email' placeholder='Enter Your Email Address' required />
              </motion.div>
            </motion.div>
            <motion.div className="message am"
              initial={'offscreen'}
              whileInView={'onscreen'}
              viewport={{once:true, amount:0.3}}
              transition={{staggerChildren:0.5}}
            >
              <motion.label variants={p3Ani} htmlFor="message">Your Message</motion.label>
              <motion.textarea variants={p3Ani} name="message" id="message" cols="10" placeholder='Enter Your Message'></motion.textarea>
            </motion.div>
            <button className="send">
              Deliver Message
              <div className="arrow">
                <div className="lin1 lin bent"></div>
                <div className="lin2 lin"></div>
                <div className="lin3 lin bent"></div>
              </div>
            </button>
          </motion.form>
          {/* Github password */}
          {/* Email: dammymaccoy1996@gmail.com,  Password: Damiola1. */}
        </div>
      </div>
    </div>
  )
}

export default Contact