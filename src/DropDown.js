import React from 'react';
import ReactDOM from 'react-dom';

class DropDown extends React.Component{
constructor(props){
  super(props);
  this.state = {};
}
render(){
  return(
    <form>
           
   <ul style={{display:'inline'}}>
    <li>Sign Up</li>
    <li>LogIn</li>
    </ul>  
    </form>
   

    
  )
}

}

export default DropDown ;
