import React from 'react';

export default function AddMachine() {
    let addMachine = (event)=>{
        let formObj;
        event.preventDefault();
        formObj = {
            name: event.target.machinename.value,
            cpu: event.target.machinecpu.value,
            ram: event.target.machineram.value
        }
        console.log(formObj)
    }

  return (
    <React.Fragment>
      <h2>Add Machine</h2>
      <form onSubmit={addMachine}>
          <div className='form-group'>
              <label>Name</label>
            <input type='text' id='machinename' className='form-control' placeholder='Enter machine name'/>
          </div>
          <div className='form-group'>
              <label>CPU</label>
            <input type='text' id='machinecpu' className='form-control' placeholder='Enter CPU'/>
          </div>
          <div className='form-group'>
              <label>RAM</label>
            <input type='number' id='machineram' className='form-control' placeholder='Enter RAM'/>
          </div>
          <button type='submit' className='btn btn-primary'>Add Machine</button>
      </form>
    </React.Fragment>
  )
}