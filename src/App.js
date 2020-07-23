import React from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './component/NavBar'
import Scale from './component/Scale'

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <p className="">Hello World DericaMudu is Here</p> */}
      <p className="m-5 font-weight-bold">A Measuring App for Grains</p>
      <Scale />
    </div>
  );
}

export default App;
