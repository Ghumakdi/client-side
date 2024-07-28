import React from 'react'
import PropTypes from 'prop-types'


function TextButtonContainer({text , onClick , isActive}) {
  return (
    <div className={` p-1  ${isActive?'bg-primaryBlue-default text-black':'bg-none text-gray-500'} rounded-lg cursor-pointer bg-opacity-55 `}
    onClick={onClick}>
          {text}
    </div>
  )
}


TextButtonContainer.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    isActive: PropTypes.bool.isRequired
}

export default TextButtonContainer