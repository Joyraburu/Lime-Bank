import React from 'react'
import Card from '../microservice/profile.jsx';
import Customer from './login.jsx';

const Home = () =>{
   
    return (
    <div>
       
      <h1>Lime Bank</h1>
      <Card/>
       <div id= 'landingpage'>
        <h2 id='landinghead'>Your Bank of choice</h2>
        <p> If you are here, you get a pet, I get a pet, we all get pets!</p>
        <p> We are dedicated to giving rescued pets a chance in having a happpy and healthy life.<br/>
        Together with the community, we treat, train and take care of these animals to enhance<br/> 
        the ecosystem. We are excited to give up these animals for adoption and<br/>
         we help you help them settle down in their new homes, every step along the way.
        </p>
        </div>
        <Customer/>
    
</div>
);
}

export default Home;