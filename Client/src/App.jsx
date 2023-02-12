import React from 'react'
import{BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/header';
import AboutUs from './Pages/aboutus';
import Home from './Pages/home'
import AddAccount from './microservice/addaccount';
import CreateCustomer from './microservice/createcustomer';
import Customer from './pages/login';
import './app.css'

const App = ()=>{

  return (
    <div className="App">
   <BrowserRouter>
        <div>
        <Header/>
        <Routes>
            
            <Route path='/' exact component ={Home}/>
            <Route path ="/aboutus" component ={AboutUs}/>
            <Route path = "/addaccount" component = {AddAccount}/>
            <Route path ="/createcustomer" component ={CreateCustomer}/>
            <Route path ="/login" component ={Customer}/>
            
        </Routes> 
        </div>
        <Home/>
        </BrowserRouter>
  <AboutUs/>
  <AddAccount/>
  <CreateCustomer/>
  
    </div>
  )
};

export default App
