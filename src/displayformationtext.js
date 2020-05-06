import React from 'react';
import ReactDOM from 'react-dom';

class DisplayFormationtext extends React.Component{

// this function is called before componentDidUpdate
static getDerivedStateFromProps(props,state){
  return { sentformation : props.propformation};
}

constructor(props){
  super(props);
  this.state = {};
  this.state.sentformation = this.props.propformation ;
}
render(){
  return(
    <label id = "l1"> {this.state.sentformation} </label>
  )
}

}

export default DisplayFormationtext ;
