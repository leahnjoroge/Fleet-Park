import React, {Component} from 'react';
import axios from 'axios';
class Truck2 extends Component{
        state={
            trucks:[]
        }
        componentDidMount(){
            axios.get('http://localhost:8080/findAllUser/findAllTrucks')
            .then(res=>{
                const trucks = res.data;
                this.setState({
                    trucks
                });
            })
        }
        render(){
        return(
            <React.Fragment>
            <h1>Leah is Cool</h1>
            <div>{this.state.trucks.map((Trucks=><div>{Trucks.weight}</div>))}</div>
            </React.Fragment>
        )
    }
}
export default Truck2;