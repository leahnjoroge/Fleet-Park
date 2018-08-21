import React,{Component} from 'react';
import axios from 'axios';
class AddTrucks extends Component{
    state={
        truckNumber:'',
        LicensePlate:'',
        Make:'',
        Year:'',
        Weigth:'',
    }
    changeHandler=(event)=>{
      const name = event.target.name;
      const value = event.target.value;
      this.setState({
        [name]:value
      })
    }
    SubmitHandler = (event)=>{
      event.preventDefault();
      console.log(this.state.LicensePlate)
      const Trucks={
        TruckNumber:this.state.truckNumber,
        LicensePlate:this.state.LicensePlate,
        make:this.state.Make,
        year:this.state.Year,
        weigth:this.state.Weigth
      }
      axios.post('http://localhost:8080/Trucks', Trucks )
      .then(Response=>{
        console.log("Trucks Added")
      }).catch(error=>{
        console.log("error")
      })
    }
    render(){
        return(
          <React.Fragment>
         <form onSubmit={this.SubmitHandler}className="addToInventory">
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">TruckNumber</label>
      <input name="truckNumber" value={this.state.truckNumber} onChange={this.changeHandler} type="truckNumber" class="form-control" id="inputEmail4" placeholder="TruckNumber"/>
    </div>
    {/* <div class="form-group col-md-6">
      <label for="inputPassword4">LicencePlate</label>
      <input name="LicensePlate" value={this.state.LicensePlate} onChange={this.changeHandler} type="text" class="form-control" id="inputPassword4" placeholder="LicensePlate"/>
    </div>
  </div> */}
  
  
  <div class="form-row">
    <div class="form-group col-md-2">
      <label for="inputCity">Make</label>
      <input name="Make" value={this.state.Make}  onChange={this.changeHandler} type="text" class="form-control" id="Makes" placeholder="Make"/>
    </div>
   
    <div class="form-group col-md-3">
      <label for="inputZip">Year</label>
      <input name="Year" value={this.state.Year} onChange={this.changeHandler} type="text" class="form-control" id="Year" placeholder="year"/>
    </div>
    <div class="form-group col-md-3">
      <label for="inputZip">Weigth</label>
      <input name="Weigth" value={this.state.Weigth} onChange={this.changeHandler}  type="text" class="form-control" id="Year" placeholder="Weight"/>
    </div>
  </div>
 </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>


 

</React.Fragment>

);
}
}
export default AddTrucks;
          