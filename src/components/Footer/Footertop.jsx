import React from 'react'
import "../../../public/footer.css"
import { FaArrowRightLong } from "react-icons/fa6";
import {FaCube, FaLayerGroup } from "react-icons/fa";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { RiFacebookLine } from "react-icons/ri";

import { LuUsersRound } from "react-icons/lu";
import { LuBookText } from "react-icons/lu";
export default function Footertop() {
  return (
    <div className="footer-top">
      <div className="footer-top-left">
       <h1>What's new at 
        <br/>Graybook AI</h1>
      <p className="description"> New products, new tools, new features, service updates, and more as they are announced!
          Find it here, try, experiment, and innovate faster!
      </p>
      <svg width="45" height="38" viewBox="0 0 45 38" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5 0H21.5L14.5 38H0L11.5 0Z" fill="#D9D9D9"></path><path d="M35 0H45L38 38H23.5L35 0Z" fill="#D9D9D9"></path></svg>
       <blockquote className="blockquote">Get started now, try our product</blockquote>
        <div className="email-input">
          <input type="email" placeholder="Enter your email here"  className="footer-email"/>
          <button className="footer-button"><FaArrowRightLong className="arrow"/></button>
         </div>
          <h4>Follow us</h4>
         <div className="social-icons">
           
             <div className="icons">
             
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.3575 2.98875H13.0008V0.12675C12.7172 0.08775 11.7423 0 10.6068 0C8.2375 0 6.6145 1.49025 6.6145 4.22925V6.75H4V9.9495H6.6145V18H9.82V9.95025H12.3288L12.727 6.75075H9.81925V4.5465C9.82 3.62175 10.069 2.98875 11.3575 2.98875Z" fill="currentColor" class="transition-colors duration-200 ease-in-out"></path></svg>
            </div>
<div className="icons">
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.9921 18.0002V17.9994H17.9966V11.3979C17.9966 8.16841 17.3013 5.68066 13.5258 5.68066C11.7108 5.68066 10.4928 6.67666 9.99554 7.62091H9.94304V5.98216H6.36328V17.9994H10.0908V12.0489C10.0908 10.4822 10.3878 8.96716 12.328 8.96716C14.2398 8.96716 14.2683 10.7552 14.2683 12.1494V18.0002H17.9921Z" fill="currentColor"></path><path d="M0.292969 5.98242H4.02497V17.9997H0.292969V5.98242Z" fill="currentColor"></path><path d="M2.15759 0C0.964344 0 -0.00390625 0.96825 -0.00390625 2.1615C-0.00390625 3.35475 0.964344 4.34325 2.15759 4.34325C3.35084 4.34325 4.31909 3.35475 4.31909 2.1615C4.31834 0.96825 3.35009 0 2.15759 0V0Z" fill="currentColor"></path></svg>
</div>
          
         </div>
      </div>
      <div className="footer-top-right">
          <h2>Why you should trust us?</h2>
         <div className="stats-grid">
          <div className="stat">
            < LuUsersRound className="icon orange" />
            <div>
              <h3>475</h3>
              <span>Active users</span>
            </div>
          </div>
          <div className="stat">
            < LuBookText  className="icon purple" />
            <div>
              <h3>476</h3>
              <span>Prompts</span>
            </div>
          </div>
          <div className="stat">
            <FaCube className="icon green" />
            <div>
              <h3>316</h3>
              <span>Products</span>
            </div>
          </div>
          <div className="stat">
            <FaLayerGroup className="icon gold" />
            <div>
              <h3>79</h3>
              <span>Blogs</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
