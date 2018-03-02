import React from 'react';

const validation = ({ inputLen }) => {
  const messageOut = (inputLen >= 5) ? 'Text length is a valid length' : 'Text Length is too short';
  return <div>{ messageOut }</div>;
};
export default validation;