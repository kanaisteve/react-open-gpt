import React from 'react'
import './footer.css'
import gpt3Logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step into the future before others
        </h1>

        <div className="gpt3__footer-btn">
          <p>Request Early Access</p>
        </div>

        <div className="gpt3__footer-links">
          <div className="gpt3__footer-links_logo">
            <img src={gpt3Logo} alt="logo" />
            <p>Transforming the Way We Interact with Technology</p>
          </div>

          <div className="gpt3__footer-links_div">
            <h4>Links</h4>
            <p>Overons</p>
            <p>Social Media</p>
            <p>Counters</p>
            <p>Contact</p>
          </div>

          <div className="gpt3__footer-links_div">
            <h4>Company</h4>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Contact</p>
          </div>

          <div className="gpt3__footer-links_div">
            <h4>Get in touch</h4>
            <p>Woodlands, Lusaka, Zambia</p>
            <p>+260 975 651 046</p>
            <p>support@kanaitech.com</p>
          </div>

          <div className="gpt3__footer-copyright">
            (c) 2023 GPT3. All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer