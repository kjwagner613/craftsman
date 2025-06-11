import React from 'react';

const contact = (props) => {
  return (
    <div className='container'>
      {/* Add your component content here */}
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
};

export default contact;
