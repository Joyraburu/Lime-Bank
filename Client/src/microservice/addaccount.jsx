import React,{Component} from 'react'
import axios from 'axios';

class AddAccount extends Component {
    constructor (props){
        super(props);
        this.state={
            UserName:"",
            Name:"",
            Password:"",
            NationalId:"",
            Email:"",
            Account:"",
        };
    }
    handleUserName= event =>{
        this.setState({
            UserName: event.target.value,
        });
    };
    handleName= event =>{
        this.setState({
            Name:event.target.value,
        });
    };
   
    handlePassword =event=>{
        this.setState({
            Password: event.target.value,
        });
    };
    handleNationalId = event=>{
        this.setState({
            NationalId: event.target.value,
        });
    };

    handleEmail = event=>{
        this.setState({
            Email: event.target.value,
        });
    };

    handleAccount = event=>{
        this.setState({
            Account: event.target.value,
        });
    };
handleSubmit= event =>{
    event.preventDefault();
    const userObject ={
        UserName: this.state.UserName,
        Name: this.state.Name,
        Password: this.state.Password,
        NationalId: this.state.NationalId,
        Email: this.state.Email,
        Account: this.state.Account,
    };
    console.log(userObject)
    axios
    .post('http://localhost:8080/account', userObject)
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
                <h1>Create another account</h1>
            <div className = "wrapper">
                <form onSubmit={this.handleSubmit}>
                <div>
                    <div> <label htmlFor="UserName">User name</label></div>
                        <input type="text" placeholder="eg. b20"
                         value={this.state.UserName} onChange= {this.handleUserName}/>
                    </div>
                    <div>
                        <div><label htmlFor = "Name">Name </label></div>
                        <input type="text" placeholder="eg. Bethuel"
                         value= {this.state.Name} onChange={this.handleName}/>
                    </div>                  
                    <div>
                       <div><label htmlFor="Password">Password</label></div>
                        <input type="password" placeholder= "Enter your password" 
                        value={this.state.Password} onChange={this.handlePassword}/>
                    </div> 
                    <div>
                        <div><label htmlFor="NationalId">National ID</label></div>
                        <input type ="number" placeholder="eg. 1345667" 
                        value= {this.state.NationalId} onChange={this.handleNationalId}/>
                    </div>
                    <div>
                        <div><label htmlFor="Email">Email</label></div>
                        <input type ="text" placeholder="eg. bethuel20@email.com" 
                        value= {this.state.Email} onChange={this.handleEmail}/>
                    </div>
                    <div>
                        <div><label htmlFor="Account">Choose account</label></div>
                        <input type ="text" placeholder="Savings or Investment" 
                        value= {this.state.Account} onChange={this.handleAccount}/>
                    </div>

                    <button type= "submit">Create</button>
                </form>
                </div>
            </div>
        ); 
    }
}
 export default AddAccount;
