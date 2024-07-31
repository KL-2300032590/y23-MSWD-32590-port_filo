
import React from 'react';
import '../App.css'; 

import geekforgeek from './geekforgeek.jpeg';
import nakuri from './nakuri.jpeg';
import hackerank from './hackerank.png';
import java from './java.png';
import leetcode from './leetcode.jpeg'; 
import linkdein from './linkdein.png';

const Allpictures = () => {
  return (
    <div className='pic-container'>
      <button className='buttons'> 
      <a href='https://www.geeksforgeeks.org/user/klu_2300032590/'>
        <img className='ipos' src={geekforgeek} alt="Geek for Geek" />
        </a>
      </button>
      <button className='buttons'> 
        <a href='https://www.naukri.com/code360/profile/19f5344b-9568-4964-9fca-37acbbcf9cb7'>
         <img className='ipos' src={nakuri} alt="Naukri" />
         </a>
         </button>
      <button className='buttons'>
      <a href='https://www.hackerrank.com/profile/h2300032590'>
         <img className='ipos' src={hackerank} alt="HackerRank" />
         </a>
         </button>
      <button className='buttons'>
      <a href=''>
        <img className='ipos' src={java} alt="Java" />
        </a>
      </button>
       <button className='buttons'>
        <a href='https://leetcode.com/u/KLU2300032590/'>
        <img className='ipos' src={leetcode} alt="LeetCode" /></a>
        </button>
      <button className='buttons'>
        <a href='https://www.linkedin.com/in/pardhasaradhi-reddy-a92a40315/'>
      <img className='ipos' src={linkdein} alt="LinkedIn" /> </a>
      </button>
    </div>
  )
}

export default Allpictures;
