// HomePage.js
import React from 'react';
import Nav from './Nav.js';
function HomePage() 
{
  return (
    <> 
      {<Nav/>}
      <div style={{ textAlign: "center", paddingTop: "50px" }}>
      <h2>Welcome to the Home Page</h2>
      <p>This is a simple example of a home page.</p>
      </div>
    </>
  );
}

export default HomePage;
