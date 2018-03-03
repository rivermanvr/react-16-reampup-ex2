import React from 'react';
import './CharOutput.css';

const charOutput = ({ character, onItemClick, index }) => {
  return (
    <div onClick={ (event) => onItemClick(event, index) } className="output-element">{ character }</div>
  );
};

export default charOutput;
