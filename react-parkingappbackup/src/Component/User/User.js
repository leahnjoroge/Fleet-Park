import React,{Component} from 'react';
import axios from 'axios';

class User extends Component{
    state={
        users:[]
    }
    componentDidMount(){
        axios.get('http://localhost:8080/findAllUser')
        .then(res=>{
            const users = res.data;
            this.setState({users});
        })
    }
    render(){
        return(
 <React.Fragment>
    <table className="table table-striped table-sm">
    <thead>
          <tr>
             <th>Users</th>
            <th>Email</th>
            <th>Role</th>

             </tr>
          </thead> 
         {this.state.users.map((user) =>
        <tbody>
           <tr>
                <td>{user.firstname}{" "}{user.lastname}</td>
             <td>{user.email}</td>
             <td>{user.role}</td>
             </tr>
             </tbody>
       
       
       )}
         </table>
    </React.Fragment>
        )
    }
}
export default User;