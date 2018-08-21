import React,{Component} from 'react';
import axios from 'axios';
class AddSpots extends Component{
    state={
        rowNo:'',
        spotNumber:'',
        price:'',
        size:'',
        vacancy:''

    }
    changeHandler=(event)=>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
        [name]:value
        })
    }

SubmitHandler= (event)=>{
    event.preventDefault();
    const Spots={
        rowNo:this.state.rowNo,
        spotNumber:this.state.spotNumber,
        price:this.state.price,
        size:this.state.size,
        vacancy:this.state.vacancy
    }
    axios.post('http://localhost:8080/Spots',Spots)
    .then(Response=>{
        console.log("Spots Added")
    }).catch(error=>{
        console.log("error")
    })
}
render(){
    return(
        
        <form onSubmit={this.SubmitHandler}className="addToInventory" >
        <label>rowNo</label>
        <input name="rowNo" value={this.state.rowNo} onChange={this.changeHandler} type="text"/>
       <label>
       spotNumber
       <input name="spotNumber" value={this.state.spotNumber} onChange={this.changeHandler}type="text"/>
       </label>
       <label>price
       <input name="price" value={this.state.price}  onChange={this.changeHandler} type="text"/>
       </label>
        <label>size
         <input name="size" value={this.state.size} onChange={this.changeHandler} type="text"/>
         </label>
         <label>vacancy
             <input name="vacancy" value={this.state.vacancy} onChange={this.changeHandler} type="text"/>
             </label>
            <input type="submit" value="Submit" />
       </form>
    
    );

}
}
export default AddSpots;
