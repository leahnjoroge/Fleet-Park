
import React,{Component} from 'react';
import axios from 'axios';
class Spots extends Component{
    state={
        spots:[],
        users:[]
       

    }
    componentDidMount(){

      // get ALL users
        axios.get('http://localhost:8080/findAllUser')
        .then(response=>{
            const UsersArray = response.data;
            this.setState({
              users: UsersArray
              });
        })
    
    // get all spots

    axios.get('http://localhost:8080/findAllSPots')
    .then(res=>{
      const spots =res.data;
      this.setState({
        spots
      });
    });
  }
  // selectUserChangehandler = (event)=>{
  //   const value = event.target.value;
  //   this.state.users.map(user=>{
  //     if(user.email===value){
  //       this.setState({
  //         selectedUser: value,
  //         spots:[]

  //       })
  //     }
  //   })
  // }
//const Spot=(props)=>{
render(){
 return(
<React.Fragment>
<h2>SPOTS</h2>
  {this.state.users.map((ParkingSpot)=>{ParkingSpot.size})}
          <div className="table-responsive">
            <table className="table table-striped table-sm">
             <thead>
              <tr>
                <th>SPOT NO.</th>
                <th>LOT #</th>
               <th>SIZE</th>
             <th>VACANCY</th>
              </tr>
            </thead>
          <tbody>
                          {this.state.spots.map((ParkingSpot)=>
        <tr>
                <td>{ParkingSpot.size}</td>
                 <td>{ParkingSpot.rowNo}</td>
                   <td>{ParkingSpot.price}</td>
                   <td>{ParkingSpot.vacancy}</td>
                 <td>{ParkingSpot.lotNumber}</td>
                </tr>
                )}
             </tbody>
            </table>
     </div>
    </React.Fragment>
 )
 }
}
export default Spots;