import React,{Component } from 'react';
class Barcode2 extends Component{
    state={
        id:'',
  
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
