import React, {Component} from 'react';
import Machine from './Machine';

class Machines extends Component {
  state = {
    machines: [
      {
        name: 'lenovo',
        cpu: 12,
        RAM: 4,
        id: 0
      }, {
        name: 'Dell',
        cpu: 12,
        RAM: 4,
        id: 1
      }, {
        name: 'Toshiba',
        cpu: 12,
        RAM: 4,
        id: 2
      }, {
        name: 'MAcbook',
        cpu: 10,
        RAM: 4,
        id: 3
      }
    ]
  }

  changeDetails = (id,value) => {
      const copy_machines = [...this.state.machines];
      copy_machines[id].RAM = copy_machines[id].RAM+Number(value);
      this.setState({machines:copy_machines});
  }
  render() {
    return (
      <React.Fragment>
        
        {this
          .state
          .machines
          .map(item => {
            return (<Machine key={item.id} {...item} Ichange={this.changeDetails}/>)
          })
}
      </React.Fragment>
    )
  }
}

export default Machines;