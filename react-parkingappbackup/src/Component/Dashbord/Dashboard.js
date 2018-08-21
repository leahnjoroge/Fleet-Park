import React,{Component} from 'react';
import axios from 'axios';
import Trucks from '../Trucks/Trucks';
import Spots from '../Spots/Spots';
import AddSpots from '../Spots/AddSpots';
import AddTrucks from '../Trucks/AddTrucks';
import User from '../User/User';

class Dashboard extends Component{

state={
spots:[],
pick:'spot',
Trucks:[],
Users:[]

}
//when the page loads get data from the database.
//enables data to be pulled from the database 
componentDidMount(){
  axios.get('http://localhost:8080/findSpots')
  .then(response =>{
    const spotsArray=response.data;
    this.setState({
      spots:spotsArray,
    })
      console.log("user was created!!");
  })

}

//switch buttons page
switchButton=(event)=>{

  const value=event.target.value;
  this.setState({
    pick:value
  })
}

render(){

  let page;

  if(this.state.pick==='user'){
    page=(<User user={this.state.user} />)
  }else if(this.state.pick==='spot'){
    page=(<Spots spots={this.state.spots}/>)
  }else if(this.state.pick==='trucks'){
    page=(<Trucks trucks={this.state.trucks} />)
  }else if(this.state.pick==='AddSpots'){
    page=(<AddSpots trucks={this.state.AddSpots} />)
  }else if(this.state.pick==='AddTrucks'){
    page=(<AddTrucks trucks={this.state.AddTrucks} />)
  }
    return (
        <div className="dashboard">
        <div className="dash">
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
      <ul className="navbar-nav px-3">
        <li className="nav-item text-nowrap">
        </li>
      </ul>
    </nav>
    <div className="container-fluid">
      <div className="row">
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
          <div className="sidebar-sticky">
            <ul className="nav flex-column">
                              <li className="nav-item">
                                <button className="sidebt"
                                value="user" onClick={this.switchButton} to="#" >
                                <span data-feather="layers"></span>
                                Users
                                </button>
                            </li>
              <li className="nav-item">
                <button className="sidebt"
                 value="trucks" onClick={this.switchButton}  to="#">
                  <span data-feather="layers"></span>
                  Trucks
                </button>
              </li>
              <li className="nav-item">
                <button value="spot" onClick={this.switchButton} className="sidebt" to="#">
                  <span data-feather="layers"></span>
                  Spots
                </button>
              </li>
              <li className="nav-item">
                <button value="AddSpots" onClick={this.switchButton} className="sidebt" to="#">
                  <span data-feather="layers"></span>
                  Add Spots
                </button>
              </li>
         <li className="nav-item">
                <button value="AddTrucks" onClick={this.switchButton} className="sidebt" to="#">
                  <span data-feather="layers"></span>
                  Add Trucks
                </button>
          </li>
          </ul>
           </div>
           </nav>
           <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Dashboard</h1>
            <div className="btn-toolbar mb-2 mb-md-0">
              <div className="btn-group mr-2">
                <button className="btn btn-sm btn-outline-secondary">Share</button>
                <button className="btn btn-sm btn-outline-secondary">Export</button>
              </div>
              <button className="btn btn-sm btn-outline-secondary dropdown-toggle">
                <span data-feather="calendar"></span>
                This week
              </button>
            </div>
          </div>
          {/* {<Chart/>} */}
         {page}
        </main>
      </div>
    </div>
    </div>
    </div>
    )
}
}
export default Dashboard;