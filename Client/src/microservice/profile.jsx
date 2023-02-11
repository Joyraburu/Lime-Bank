import React from 'react'



  
function Card() {
    function deposit()  {
        return (
          <div>
            <button>From Mpesa</button>
            <button>From another account</button>
          </div>
        )
      };
    function withdraw (){
        return (
          <div>
            <button>To Mpesa</button>
            <button>To another account</button>
          </div>
        )
      };
  return (
<div className='container'>

    <div className='profileimage'>
<img id ='profile-pic' src="" alt='puzzle' /> <h5>John Doe</h5>
    </div>

    <div className='content'>
    <div className='top-content'>
        <p id= "account">Savings account <br/> Balance: Ksh******</p>
    </div>

    <div>
        <button onClick={deposit}>Deposit</button>
        <button onClick={withdraw}>Withdraw</button>
    </div>
    </div>

</div>
 )
};
export default Card;