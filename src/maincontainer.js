import React from 'react';
import ReactDOM from 'react-dom';
import DisplayFormationtext from './displayformationtext.js' ;

class MainContainer extends React.Component{

constructor(props){
  super(props);
  this.state = {};
  this.state.formation = '';
  this.handleOnChange = this.handleOnChange.bind(this);
}

handleOnChange(e){
  this.setState({
    formation : e.target.value
  });
}

render(){
var conditional ;
if(this.state.formation === ' ' || this.state.formation === ''){
  conditional = <p/>
}
else{
  conditional = <p style = {{color:'blue'}}> Design Your Team Below </p>
}

var items = [] ;
var string = this.state.formation ;
var resarr = string.split("-");
var len = resarr.length ;
items.push(<p/>);

for(var i = 1 ; i <=len ; i++){
  for(var j = 0 ; j< resarr[i-1] ; j++){
   items.push(<input type = "text"/>);
    items.push("                      ");
  }
  items.push(<p/>);
}

  return(
    <div>
    <h1 style = {{color : 'red'}}> Welcome to Arsenal F.C. </h1>
    <h2>Select your formation </h2>
    <p>
    <select
    id = "arsenal"
    name = "arsenal"
    onChange = {this.handleOnChange}
    >
      <option id = "0"></option>
      <option id = "1">4-4-2</option>
      <option id = "2">4-2-1-3</option>
      <option id = "3">4-3-3</option>
      <option id = "4">5-3-2</option>
      <option id = "3">4-1-2-1-2</option>
      <option id = "4">4-5-1</option>
    </select>
    </p>

    <p>
     Your Selected formation is : <DisplayFormationtext propformation = {this.state.formation} />
    </p>

    {conditional}
    {items}

    <button style = {{height:25 , marginTop: 10 , width : 100}} > Hit me </button>

    </div>
  )

}

}

export default MainContainer ;
