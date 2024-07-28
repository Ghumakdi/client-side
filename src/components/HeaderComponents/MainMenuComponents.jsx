import React, { useState } from 'react';
import IconContainer from '../IconContainer';
import { CiCircleInfo, CiHome, CiMap } from 'react-icons/ci';

function MainMenuComponents() {
  const [activeIcon, setActiveIcon] = useState('home');

  const icons = [
    { component: <CiHome />, key: 'home' },
    { component: <CiMap />, key: 'map' },
    { component: <CiCircleInfo />, key: 'info' },
  ];

  const handleIconClick = (key) => {
    setActiveIcon(key);
  };

  return (
    <div className='menu-items grid grid-flow-col space-x-2'>
      {icons.map((icon, index) => (
        <IconContainer
          key={icon.key}
          icon={icon.component}
          isActive={activeIcon === icon.key}
          onClick={() => handleIconClick(icon.key)}
        />
      ))}
    </div>
  );
}

export default MainMenuComponents;
