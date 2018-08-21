import React,{Component} from 'react';
import axios from 'axios';
import UsersList from '../UsersList/UsersList';
class Home extends Component{
state={
    Users:[]
}
componentDidMount(){
    axios.get('http://localhost:8080/findUsers')
    .then(response=> {
        this.state({
            users:response.data
 });

    })

}
    render(){
        return (
            <UsersList users={this.state.users}/>

        );
    }
}
export default Home;