

import Logo from "../SweetIndulgence.png";


export default function Hero(){

    return( 
     <>  
    <div className='heroImage'>
    <span className='logo-line-1'></span>
    <span className='logo-line-2'></span>
    <img src={Logo} className="logo-icon"/>
  </div>
  
  </> 
  );
}