import React from 'react'

const Footer = () => {

    const date = new Date()
  return (
    <div className='text-center pt-3'>
        <hr className='border-white'/>
        <p className='py-3'>Copyright © {date.getFullYear()}. All Rights Reserved.</p>
    </div>
  )
}

export default Footer