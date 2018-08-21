import React,{Component} from 'react';
import axios from 'axios';

class Trucks extends Component{
  state={
    trucks:[],
    users:[]
  }
  componentDidMount(){
    // axios.get('http://localhost:8080/findAllUser')
    // .then(response=>{
    //     const users = response.data;
    //     this.setState({
    //       users
    //       });
    // })

    //get all trucks
    axios.get('http://localhost:8080/findAllTrucks')
    .then(res=>{
      const trucks = res.data;
      this.setState({
        trucks
      });
    });
  }
render(){
return(
<React.Fragment>

     <h2>TRUCKS</h2>
          
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th>TruckNumber</th>
                  <th>Year</th>
                  <th>Weight</th>
                </tr>
              </thead>
              <tbody>
                    {this.state.trucks.map((Trucks)=>
                <tr>
                  <td>{Trucks.TruckNumber}</td>
                  <td>{Trucks.make}</td>
                  <td>{Trucks.year}</td>
                  <td>{Trucks.weigth}</td>
                </tr>
                )}
              </tbody>
            </table>
          
          
            
</React.Fragment>
)
}
}
export default Trucks;