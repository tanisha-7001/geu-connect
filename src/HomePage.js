// HomePage.js
import React from 'react';
import Nav from './Nav.js';
function HomePage() 
{
  return (
    <> 
      {<Nav/>}
      <div id="im"></div>
      <div style={{fontSize:"20px",color:"black",textAlign: "center", paddingTop: "20px" }}>
      <h1 style={{marginLeft:"160px",marginTop:"30px"}}>Welcome to the Home Page of GEU - CONNECT</h1>
      </div>
    </>
  );
}

export default HomePage;
