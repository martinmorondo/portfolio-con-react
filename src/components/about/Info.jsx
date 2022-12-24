import React from 'react'

const Info = () => {
  return (
    <div className='about-info grid'>
        <div className='about-box'>
        <i class='bx bx-award about-icon'></i>
            <h3 className='about-title'>Experience</h3>
            <span className='about-subtitle'>1 year working</span>
        </div>

        <div className='about-box'>
        <i class='bx bx-briefcase about-icon'></i>
            <h3 className='about-title'>Completed</h3>
            <span className='about-subtitle'>+48 projects</span>
        </div>

        <div className='about-box'>
        <i class='bx bx-support about-icon'></i>
            <h3 className='about-title'>Support</h3>
            <span className='about-subtitle'>Online 24/7</span>
        </div>

        
    </div>
  )
}

export default Info