import React,{Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import Header from '../Header/Header';
import SignUp from '../SignUp/SignUp';
import Dashboard from '../Dashbord/Dashboard';
import Login from '../Login/Login';
import Index from '../Index/Index';
import Chart from '../Chart/Chart';
import Spots from '../Spots/Spots';
import Trucks from '../Trucks/Trucks';
import Truck2 from '../Trucks/Truck2';
import User from '../User/User';
import MyAccount from '../UserInterface/Myaccount'
class Layout extends Component{
    state={
        loggedInUser:false,
    }
    setLoggedInUser=(user)=>{
        this.setState({
            loggedInUser:user
        })
    }
    render(){
        let routes =(
            <React.Fragment>
                <Route exact path="/Truck2" component={Truck2}/>
                <Route exact path="/sign-up" component={SignUp}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/dashboard" component={Dashboard}/> 
                <Route exact path="/chart" component={Chart} />
                <Route exact path="/Spots" component={Spots} />
                <Route exact path="/" component={Index}/>
                <Route exact path="/Trucks" component={Trucks} />
                <Route exact path="/User" component={User} />
                <Route exact path="/MyAccount" component={MyAccount} />
                </React.Fragment> 
        )
        if (this.state.loggedInUser){
            routes=(
                <React.Fragment>
                    
                    <Route exact path  = "/dashboard" Component={Dashboard}/>
                    </React.Fragment>
            )
        }
        return(
<React.Fragment>
    <Header />//loggedInUser ={this.state.loggedInUser} setLoggedInUser={this.setLoggedInUser}/>
    
    {routes}
    </React.Fragment>
        );
    }
}
export default Layout;