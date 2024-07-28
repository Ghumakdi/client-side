import React from 'react'
import PropTypes from 'prop-types'

function Button({text ,onClick,styles}) {
  return (
    <div 
    className={`${styles} bg-primaryGreen-default text-center flex items-center justify-center ${styles}`} 
    onClick={onClick}
>
    {text}
</div>
  )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    styles: PropTypes.string,
    onClick: PropTypes.func.isRequired,

}


export default Button