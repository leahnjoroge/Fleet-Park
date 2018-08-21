import React,{Component} from 'react';
import axios from 'axios';
// import {Redirect} from 'react-router-dom';
class SignUp extends Component{
    state ={
        firstname: '',
        lastName: '',
        email: '',
        password: '',
        street:'',
        street2: '',
        city: '',
        state: '',
        zip: '',
        phone_no: '',
        role: ''
    }
    signUpChangeHandler = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState(
            {
                [name]:value
            }
        )
    }
    signUpSubmitHandler = (event) =>{
        event.preventDefault();
        const user ={
            firstname:this.state.firstname,
            lastName:this.state.lastName,
            email:this.state.email,
            password:this.state.password,
            street:this.state.street,
            street2:this.state.street2,
            city:this.state.city,
            state:this.state.state,
            zip:this.state.zip,
            role:this.state.role,
            phone_no:this.state.phone_no
        }
        axios.post('http://localhost:8080/register',user)
        .then(response=>{
            console.log("User created")

        }).catch(error=>{
            console.log("Error")
        })
    }
    render() {
        return (
            <form onSubmit={this.signUpSubmitHandler} className="container"> 
                <div className="form-row">
                <div className="form-group col-md-4">
                    <label for="inputRole">Account Type</label>
                    <select name="role" onChange={this.signUpChangeHandler} value={this.state.role} id="inputRole" className="form-control" >
                        <option selected>Select</option>
                        <option>Admin</option>
                        <option>Customer</option>
                    </select>
                    </div>
                <div className="form-group col-md-6">
                    <label for="phone_no">Phone Number</label>
                    <input name="phone_no" onChange={this.signUpChangeHandler} value={this.state.phone_no} type="text" className="form-control" id="phone_no" placeholder="Phone Number"/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label for="firstName">First Name</label>
                    <input name="firstname" onChange={this.signUpChangeHandler} value={this.state.firstname} type="text" className="form-control" id="firstName" placeholder="First Name"/>
                    </div>
                    <div className="form-group col-md-6">
                    <label for="lastName">Last Name</label>
                    <input name="lastName" onChange={this.signUpChangeHandler} value={this.state.lastName} type="text" className="form-control" id="lastName" placeholder="Last Name"/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label for="inputEmail4">Email</label>
                    <input name="email" onChange={this.signUpChangeHandler} value={this.state.email} type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
                    </div>
                    <div className="form-group col-md-6">
                    <label for="inputPassword">Password</label>
                    <input name="password" onChange={this.signUpChangeHandler} value={this.state.password} type="password" className="form-control" id="inputPassword" placeholder="Password"/>
                    </div>
                </div>
                <div className="form-group col-md-78">
                    <label for="inputStreet">Street</label>
                    <input name="street" onChange={this.signUpChangeHandler} value={this.state.street} type="text" className="form-control" id="inputStreet" placeholder="Street"/>
                </div>
                <div className="form-group col-md-45">
                    <label for="inputStreet2">Street2</label>
                    <input name="street2" onChange={this.signUpChangeHandler} value={this.state.street2} type="text" className="form-control" id="inputStreet2" placeholder="Street2"/>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-34">
                    <label for="inputCity">City</label>
                    <input name="city" onChange={this.signUpChangeHandler} value={this.state.city} type="text" className="form-control" id="inputCity" placeholder="City"/>
                    </div>
                    <div className="form-group col-md-4">
                    <label for="inputState">State</label>
                    <select name="state" onChange={this.signUpChangeHandler} value={this.state.state} id="inputState" className="form-control" >
                        <option selected>Choose State</option>
                        <option>Alabama</option>
                        <option>Alaska</option>
                        <option>Arizona</option>
                        <option>Arkansas</option>
                        <option>California</option>
                        <option>Colorado</option>
                        <option>Connecticut</option>
                        <option>Delaware</option>
                        <option>Florida</option>
                        <option>Georgia</option>
                        <option>Hawaii</option>
                        <option>Idaho</option>
                        <option>Illinois</option>
                        <option>Indiana</option>
                        <option>Iowa</option>
                        <option>Kansas</option>
                        <option>Louisiana</option>
                        <option>Maine</option>
                        <option>Maryland</option>
                        <option>Massachusetts</option>
                        <option>Michigan</option>
                        <option>Minnesota</option>
                        <option>Mississippi</option>
                        <option>Missouri</option>
                        <option>Montana</option>
                        <option>Nebraska</option>
                        <option>Nevada</option>
                        <option>New Hampshire</option>
                        <option>New Jersey</option>
                        <option>New Mexico</option>
                        <option>New York</option>
                        <option>North Carolina</option>
                        <option>North Dakota</option>
                        <option>Ohio</option>
                        <option>Oklahoma</option>
                        <option>Oregon</option>
                        <option>Pennsylvania</option>
                        <option>Rhode Island</option>
                        <option>South Carolina</option>
                        <option>South Dakota</option>
                        <option>Tennesse</option>
                        <option>Texas</option>
                        <option>Utah</option>
                        <option>Vermont</option>
                        <option>Washington</option>
                        <option>West Virginia</option>
                        <option>Wisconsin</option>
                        <option>Wyoming</option>
                    </select>
                    </div>
                    <div className="form-group col-md-2">
                    <label for="inputZip">Zip</label>
                    <input name="zip" onChange={this.signUpChangeHandler} value={this.state.zip} type="text" className="form-control" id="inputZip"/>
                    </div>
                </div>    
                <div className="form-group">
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck"/>
                    <label className="form-check-label" for="gridCheck">
                        Check me out
                    </label>
                    </div>
                </div>
                <button type="submit"component={SignUp} className="btn btn-primary">Sign Up</button>
            </form>
        )
    }
}
export default SignUp;