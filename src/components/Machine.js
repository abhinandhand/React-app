import React from 'react';

export default function Machine(props) {
  let inputRAM = React.createRef();
    let changeAmount=function(id){
       // console.log()
        props.Ichange(props.id,inputRAM.current.value)
    }
  return (
    <React.Fragment>
      <h3>My name: {props.name}</h3>
      <h3>My CPU: {props.cpu}</h3>
      <h3>My RAM: {props.RAM}</h3>
      <input type="number" id="ramamount" ref={inputRAM} /> &nbsp;
      <button className="btn btn-info" onClick={changeAmount.bind(props.id)}>Change CPU</button>
      <hr/> 
    </React.Fragment>
  )
}
