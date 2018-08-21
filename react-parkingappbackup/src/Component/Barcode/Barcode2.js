import React,{Component } from 'react';
import axios from 'axios';
class Barcode2 extends Component{
    state={
        id:'',
    }
    changeHandler=(event)=>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        })
        }
        SubmitHandler=(event)=>{
            event.preventDefault();
            const Barcode={

            }
            axios.post('http://localhost8080/Barcode',Barcode)
            .then(Response=>{
                console.log("Barcode Added")
            }).catch(error=>{
                console.log("error")

            })
        }


    render(){
            return(
                <form class="form-Barcode">
                <h1 class="h3 mb-3 font-weight-normal">Barcode</h1>
                <label for="barcode" class="sr-only">Barcode</label>
                <input type="barcode" id="barcode" class="form-control" placeholder="Barcode" required autofocus/>
                
                <svg id="barcode"></svg>
               <canvas id="canvas"></canvas>
                 <img id="barcode"/>

                </form>
        )
    }
}
export default Barcode2;