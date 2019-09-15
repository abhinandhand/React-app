import React, {Component} from 'react';

export default class Square extends Component{
    click=0;

    render(){
        return (
            <button className='game-col' onClick={this.dispalyTurn} >
                
            </button>
        )
    }

    dispalyTurn=(event)=>{
        this.click = this.click+1;
        if(this.click % 2 === 0){
            event.target.value ='O';
        }else{
            event.target.value ='X';
        }
    }
}