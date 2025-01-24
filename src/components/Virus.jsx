import React from 'react'

const Virus = ({title, risk, details}) => {
  return (
    <div className='virus'>
      <p style={{color:'#C01818', fontWeight:'500'}}>{title}</p>
      <p>{details}</p>
      <p>{risk}</p>
    </div>
  )
}

export default Virus