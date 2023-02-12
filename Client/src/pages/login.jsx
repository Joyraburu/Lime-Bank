import React,{Component} from 'react'
import axios from 'axios';

class Customer extends Component {
    constructor (props){
        super(props);
        this.state={
            UserName:"",
            Password:"",
        };
    }
    handleUserName= event =>{
        this.setState({
            UserName: event.target.value,
        });
    };
    handlePassword =event=>{
        this.setState({
            Password: event.target.value,
        });
    };
   
handleSubmit= event =>{
    event.preventDefault();
    const userObject ={
        UserName: this.state.UserName,
        Password: this.state.Password,
    };
    console.log(userObject)

    axios
    .post('http://localhost:8080/login', userObject)
    .then((response)=>{
console.log(response.data);
this.props.history.push("/");
    })
    .catch((error) =>{
        console.log(error);
    });
};
    render(){
        return(
            <div>
                <h1>Log in</h1>
            <div className = "wrapper">
                <form onSubmit={this.handleSubmit}>
                <div>
                    <div> <label htmlFor="UserName">User name</label></div>
                        <input type="text" placeholder="eg. b20"
                         value={this.state.UserName} onChange= {this.handleUserName}/>
                    </div>
                                   
                    <div>
                       <div><label htmlFor="Password">Password</label></div>
                        <input type="password" placeholder= "Enter your password" 
                        value={this.state.Password} onChange={this.handlePassword}/>
                    </div>

                    <button type= "submit" >Log in</button>
                </form>
                </div>
            </div>
        ); 
    }
}
 export default Customer;