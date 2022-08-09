import React from 'react'

export default function Box(props) {
  return (
    <div className='main-box'>
      <div style={{top:props.valObj.x_pos,left:props.valObj.y_pos ,transform: `rotate(${ props.valObj.rotate})`}}  className="moving-box">

      </div>
    </div>
  )
}

