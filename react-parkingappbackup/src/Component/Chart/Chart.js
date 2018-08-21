import React, {Component} from 'react';
import {Bar,Line,Pie} from 'react-chartjs-2';
import axios from 'axios';
import trucks from '../Trucks/Trucks';

class Chart extends Component{
    state ={
        chart:[],
        // hit trucks 
        trucksize:10,
        spotsize:10,

    }

componentDidMount(){

    axios.get('http://localhost:8080/findAllTrucks')
    .then(res =>{
        const trucks = res.data;
        const size=trucks.length;
        console.log("sizes",size)
        this.setState({
            trucksize:size,
            chart:{labels:[4,5,6,7,7,8,8,9],
                
                datasets:[
                    {
                        label: 'My First dataset',
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: 'rgba(75,192,192,0.4)',
                        borderColor: 'rgba(75,192,192,1)',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: 'rgba(75,192,192,1)',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [1,3,5,6,6,7,7,78,6,8]
                     }]
                    }
        })
    })
    axios.get('http://localhost:8080/findAllSPots')
    .then(res=>{
        const spot = res.data;
        const spots=spot.length;
        console.log("spot",spots)
        this.setState({
            spotsize:spots,
        })
    })

        this.setState({
            chart:{
                labels:[50,9,0,8,9,6,8,6,8,5],
            
                datasets:[
                    {
                        label: 'My First dataset',
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: 'rgba(75,192,192,0.4)',
                        borderColor: 'rgba(75,192,192,1)',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: 'rgba(75,192,192,1)',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: this.state.spotsize
                     },{
                        label: 'My First dataset',
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: 'rgba(75,192,192,0.4)',
                        borderColor: 'rgba(75,192,192,1)',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: 'rgba(75,192,192,1)',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data:[3,5,6,6,7,7,7,8,8]
                     }
                 ]
             }
       });
     
 }
 
      render(){
        
          return(
             <React.Fragment>
               <Pie data={this.state.chart}/> 
 
               
                   
             </React.Fragment>
          )
      }
  }
  export default Chart;
               