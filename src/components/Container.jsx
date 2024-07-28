import React from 'react'
import PropTypes from 'prop-types'

function Container({children}) {
  return (
    <div className='p-1 bg-white'>{children}</div>
  )
}

Container.propTypes = {
  children: PropTypes.node.isRequired
}

export default Container