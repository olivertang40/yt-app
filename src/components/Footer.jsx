import React from 'react'

import './Footer.styles.scss'

const Footer = () => {
  return (
    <div className='ui vertical footer segment'>
      <div classsName='ui container'>
        <div className='content'>
          <p>&copy; Focused</p>
          <p className='copyright-year'>2022</p>
        </div>
      </div>
    </div>
  )
}

export default Footer