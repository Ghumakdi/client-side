import React from 'react';
import PropTypes from 'prop-types';

function IconContainer({ icon, isActive, onClick }) {
  return (
    <div
      className={`p-1 text-3xl font-bold text-primaryDark-default rounded-xl ${
        isActive ? 'bg-primaryBlue-default' : 'bg-none'
      }  bg-opacity-60`}
      onClick={onClick}
    >
      {icon}
    </div>
  );
}

IconContainer.propTypes = {
  icon: PropTypes.node.isRequired,
  isActive: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default IconContainer;
