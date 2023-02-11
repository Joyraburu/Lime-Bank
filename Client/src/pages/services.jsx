import React,{Component} from 'react'
import axios from 'axios';
import {WiStars} from 'react-icons/wi';


class Adopt extends Component {
  constructor (props){
    super(props);
    this.state={
        nameOfAnimal:"",
        nameOfAdopter:"",
        phoneNumber:"",
        residence:"",
        dateOfAdoption:"",
    };
}
handleNameOfAnimal= event =>{
    this.setState({
        nameOfAnimal: event.target.value,
    });
};
handleNameOfAdopter= event =>{
    this.setState({
nameOfAdopter:event.target.value,
    });
};

handlePhoneNumber =event=>{
    this.setState({
        phoneNumber: event.target.value,
    });
};
handleResidence = event=>{
    this.setState({
        residence: event.target.value,
    });
};
handleDateOfAdoption = event=>{
  this.setState({
    dateOfAdoption:event.target.value,
  });
};

handleSubmit= event =>{
event.preventDefault();
const userObject ={
    nameOfAnimal: this.state.nameOfAnimal,
    nameOfAdopter: this.state.nameOfAdopter,
    phoneNumber: this.state.phoneNumber,
    residence: this.state.residence,
    dateOfAdoption:this.state.dateOfAdoption,
};

axios
.post('http://localhost:8080/adopt', userObject)
.then((response)=>{
console.log(response.data);
this.props.history.push("/");
})
.catch((error) =>{
    console.log(error);
});
};
render(){
  return (
    <div>
    <h1><WiStars fontSize="1.7em"/>Adopt</h1>
<div id= "form">
<form onSubmit={this.handleSubmit} className='div' >
                <div>
                    <div> <label htmlFor="nameOfAnimal">Name of animal</label></div>
                        <input type="text" placeholder="Name of animal"
                         value={this.state.nameOfAnimal} onChange= {this.handleNameOfAnimal}/>
                    </div>
                    <div>
                        <div><label htmlFor = "nameOfAdopter">Name of adopter </label></div>
                        <input type="text" placeholder="Name of adopter"
                         value= {this.state.nameOfAdopter} onChange={this.handleNameOfAdopter}/>
                    </div>                  
                    <div>
                       <div><label htmlFor="phoneNumber">Phone Number</label></div>
                        <input type="number" placeholder= "Phone number" 
                        value={this.state.phoneNumber} onChange={this.handlePhoneNumber}/>
                    </div>
                    <div>
                        <div><label htmlFor="residence">Residence</label></div>
                        <input type ="text" placeholder="Residence" 
                        value= {this.state.residence} onChange={this.handleResidence}/>
                    </div>
                    <div>
                        <div><label htmlFor="dateOfAdoption">Date of Adoption</label></div>
                        <input type ="date" placeholder="Date of Adoption" 
                        value= {this.state.dateOfAdoption} onChange={this.handleDateOfAdoption}/>
                    </div>
                    <button>Register</button>
                </form>
                </div>
</div>
  );
  }
}
export default Adopt;