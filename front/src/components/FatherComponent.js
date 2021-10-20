import React from 'react';
import ChildComponent from './ChildComponent';

/**Challenge 2: Write functional React component 
Component should use HOC from previous question to display if mouse is over or out of component and on click of mouse changes text color
 */
function FatherComponent(props) {
  const { mouseHover, defaultColor, ...divProps } = props;
  return (
    <div>
      <h1 {...divProps} style={{ color: defaultColor ? 'White' : 'Green' }}>
        Click here to change color, The mouse is {mouseHover ? 'Over' : 'Out'}
      </h1>
    </div>
  );
}

export default ChildComponent(FatherComponent);
