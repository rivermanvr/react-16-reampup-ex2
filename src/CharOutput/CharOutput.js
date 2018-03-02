import React from 'react';
import './CharOutput.css';

const charOutput = ({ character }) => {
  return (
    <div className="output-element">{ character }</div>
  );
}

export default charOutput;
