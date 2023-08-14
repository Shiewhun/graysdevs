import React from 'react'
import './Footer.css'
import { Link } from 'react-scroll'


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-container">
            <h4 className="f-lang">Full-stack Web Application Developers, Blockchain Interface Developers, Application Integration & Support, Customer Training.</h4>
            <h4 className="f-name">	&copy; GraysDevs</h4>
            {/* <div className="f-icons">
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer">Github</a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div> */}
            <h4><Link to='/contact'> Lets Talk  </Link></h4>
        </div>
    </div>
  )
}

export default Footer
