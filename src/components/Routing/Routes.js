import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './Navbar';
import Machines from '../Machines';
import AddMachine from '../AddMachine';
import Users from '../Users/Users';
import Tictactoe from '../Tictactoe/Tictactoe';

export default function Routes() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar/>
        <div className='container-fluid'>
          <div className='row'>
            <div className='offset-md-4 col-md-4 machines-col'>
              <Switch>
                <Route exact path='/' component={Machines}></Route>
                <Route path='/addMachine' component={AddMachine}></Route>
                <Route path='/users' component={Users}></Route>
                <Route path='/game' component={Tictactoe}></Route>
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </React.Fragment>
  )
}