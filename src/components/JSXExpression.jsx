import React from 'react';

function JSXExpressions() {
  const name = 'Humphrey';
  const year = new Date().getFullYear();
  const sum = 5 + 7;

  return (
    <div style={{
      margin: '20px',
      padding: '10px',
      border: '1px solid lightgray',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9'
    }}>
      <h2>Hello, {name}!</h2>
      <p>The current year is: {year}</p>
      <p>5 + 7 = {sum}</p>
    </div>
  );
}

export default JSXExpressions;
