import React, {Component} from 'react';
import Axios from 'axios';


export default class Users extends Component{
    state ={Users:[]}

    fetchUsers =()=>{
        Axios.get('https://jsonplaceholder.typicode.com/users').
        then((res)=>{
            console.log(res);
            this.setState({Users:res.data})
        })
    }

    render(){
        return (
        <React.Fragment>
            <button className='btn btn-warning' onClick={this.fetchUsers}>Fetch Users</button>
            {
                this.state.Users.map(item => {
                   return <div key={item.id}>
                    <h6>My name: {item.name}</h6>
                    <h6>My phone: {item.phone}</h6>
                    <hr/>
                    {/* <h3>My RAM: {props.RAM}</h3> */}

                    </div>
                })
            }
        </React.Fragment>
        )
    }
}