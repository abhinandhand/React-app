import React from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './components/Routing/Routes';

function App() {
  return (
    <div className="App">
      <h1 className="text-info">
        Welcome to the machines shop
      </h1>
     <Routes/>
    </div>
  );
}

export default App;

// One page components
{/* <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-4 machines-col'>
            <Machines/>
          </div>
          <div className='col-md-4 machines-col'>
            <AddMachine/>
          </div>
          <div className='col-md-3 machines-col'>
            <Users/>
          </div>
        </div>
      </div> */}