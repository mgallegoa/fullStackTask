import React, { useState } from 'react';

/**Challenge 1: Write higher order component in React 
HOC should provide property mouseOver to child component if mouse is over or mouse is out of the component
 */
const ChildComponent = (WrappedComponent) => {
  const HoverFunctionality = () => {
    const [defaultColor, setDefaultColor] = useState(true);

    const [mouseHover, setMouseHover] = useState(false);

    return (
      <WrappedComponent
        onMouseOver={() => setMouseHover(true)}
        defaultColor={defaultColor}
        onMouseLeave={() => setMouseHover(false)}
        mouseHover={mouseHover}
        onClick={() => setDefaultColor(!defaultColor)}
      />
    );
  };

  return HoverFunctionality;
};

export default ChildComponent;
