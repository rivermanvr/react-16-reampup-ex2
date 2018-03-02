import React from 'react';

const validation = ({ inputLen }) => {
  const messageOut = (inputLen < 5) ? 'Text Length is too short' : 'Text length is a valid length';
  return (
    <p>
      { messageOut }
    </p>
  );
};

export default validation;
