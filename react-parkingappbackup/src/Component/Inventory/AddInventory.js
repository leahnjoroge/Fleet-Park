import React,{Component} from 'react';
import axios from 'axios';
import Trucks from '../trucks/Trucks';

class AddInventory extends Component{
    state = {
        truckNumber:'',
        LicensePlate:'',
        Make:'',
        Year:'',
        Weight:''
    }
    InventoryChangeHandler =(event)=>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState(
            {
            [name]:value
            }
        )
    } 
    InventorySubmitHandler =(event) =>{
        event.preventDefault();
        const Truck ={
            truckNumber:this.state.truckNumber,
            LicensePlate:this.state.LicensePlate,
            Make:this.state.Make,
            Year:this.state.Year,
            Weight:this.state.Weight,

        }
        axios.post('http://localhost:8080/inventory',Trucks)
        .then(response=>{
            console.log("Inventory added")
        }).catch(error=>{
            console.log("error")
        })
    }
    render(){
        return(
        <form onSubmit={this.InventorySubmitHandler}className="addToInventory" >
        <label>truckNumber</label>
        <input name="truckNumber" value={this.state.truckNumber} onChange={this.InventoryChangeHandler} type="text"/>
      
       <label>
       LicensePlate
       <input name="LicensePlate" value={this.state.LicensePlate} onChange={this.InventoryChangeHandler}type="text"/>
       </label>

       <label>Make
       <input name="make" value={this.state.Make}  onChange={this.InventoryChangeHandler} type="text"/>
     </label>
     <label>Year
         <input name="year" value={this.state.Year} onChange={this.inventoryChangeHandler} type="text"/>
         </label>
         <label>Weigth
             <input name="year" value={this.state.Weight} onChange={this.InventoryChangeHandler} type="text"/>
             </label>
             <input type="submit" value="Submit" />
       </form>
       
        );
    }
}
export default AddInventory;
