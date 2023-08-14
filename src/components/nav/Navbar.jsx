import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { motion, variants } from 'framer-motion'
import './Navbar.css'

const navLogo={
    offscreen:{y: -100},
    onscreen:{y: 0, 
      rotate:[0,20,-10,0],
      transition: {type: 'spring',
      bounce: 0.6,
      delay: 0.5,
      duration: 1
    }
    }
  
  }

const Navbar = () => {

    const [toggle, setToggle] = useState(false)
    console.log(toggle)


  return (
    <div className='navbar'>
        <div className="navbar-container">
            <motion.div className="nav-left"
                initial={'offscreen'}
                animate={'onscreen'}     
                variants={navLogo}
            >
                <Link to='home' smooth={true} className="nav-left" style={{fontStyle: 'italic', cursor: 'pointer'}}>
                    (GraysDevs)
                </Link>
            </motion.div>
            <div className="nav-right nav-large">
                <ul>
                    <motion.li
                        initial={{y: -60}}
                        animate={{y: 0, rotate: [0,15,-150,0]}}
                        transition={{ duration: 1, delay: 0.6, bounce: 2, type: 'spring' }}
                    >
                        <Link to='home' smooth={true} duration={1200} className='link'>
                            Home
                        </Link>
                    </motion.li>
                    <motion.li
                        initial={{y: -60}}
                        animate={{y: 0, rotate: [0,15,-150,0]}}
                        transition={{ duration: 1, delay: 0.7, bounce: 0.5 }}
                    >
                        <Link to='about' smooth={true} duration={1200} offset={-70}>
                            About Me
                        </Link>
                    </motion.li>
                    <motion.li
                        initial={{y: -60}}
                        animate={{y: 0, rotate: [0,15,-150,0]}}
                        transition={{ duration: 1, delay: 0.8, bounce: 0.5 }}
                    >
                        <Link to='project' smooth={true} duration={1200} offset={-70}>
                            Project
                        </Link>
                    </motion.li>
                    <motion.li
                        initial={{y: -60}}
                        animate={{y: 0, rotate: [0,15,-150,0]}}
                        transition={{ duration: 1, delay: 0.9, bounce: 0.5 }}
                    >
                        <Link to='service' smooth={true} duration={1200} offset={-70}>
                            Service
                        </Link>
                    </motion.li>
                    <motion.li
                        initial={{y: -60}}
                        animate={{y: 0, rotate: [0,15,-150,0]}}
                        transition={{ duration: 1, delay: 1, bounce: 0.5 }}
                    >
                        <Link to='contact' smooth={true} duration={1200} offset={-70}>
                            Contact
                        </Link>
                    </motion.li>
                </ul>
            </div>

            {/* Media Query Hambuger Menu */}
            <div className="menu-bar" onClick={() => setToggle(prevToggle => !prevToggle)}>
                <div className="line line1"></div>
                <div className="line line2"></div>
                <div className="line line3"></div>
            </div>
        </div>
            <div className="nav-small">
                <div className={toggle ? 'active' : 'menu-list'}>
                    <ul>
                        <li >
                            <Link onClick={() => setToggle(prevToggle => !prevToggle)} to='home' offset={-70}  smooth={true} duration={1200}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link onClick={() => setToggle(prevToggle => !prevToggle)} to='about' offset={-70}  smooth={true} duration={1200}>
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link onClick={() => setToggle(prevToggle => !prevToggle)} to='project' offset={-70}  smooth={true} duration={1200}>
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link onClick={() => setToggle(prevToggle => !prevToggle)} to='service' offset={-70} smooth={true} duration={1200}>
                                Services
                            </Link>
                        </li>
                        <li>
                        <Link onClick={() => setToggle(prevToggle => !prevToggle)} to='contact' offset={-70} smooth={true} duration={1200}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>


    </div>
  )
}

export default Navbar
