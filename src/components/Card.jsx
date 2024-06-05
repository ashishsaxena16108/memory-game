import React from 'react'
import './Card.css'
const Card = (props) => {
  const openIt = () => {
    if(!props.isOpened)
       props.openImage()
  }
  return (
    <div className='cell' onClick={openIt} style={{ cursor: 'pointer', transition: 'transform 0.6s' }}>
      <div className="cell-inner" style={{ transform: props.isOpened ? 'rotateY(180deg)' : 'rotateY(0)' }}>
        <div className="cell-front">
        </div>
        <div className="cell-back">
          {/* Back content appears only when isOpened is true */}
          {props.isOpened && props.image}
        </div>
      </div>
    </div>
  )
}

export default Card
