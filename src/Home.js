import React from 'react';
import ReactDOM from 'react-dom';


class Home extends React.Component {

     constructor(props){
         super(props);
         this.state={};
     }

     render(){

        return(

             <div style={{backgroundColor:'lightblue'}}>
                
                 <p>
                        
                 <button style = {{height:225 , marginTop: 10 , width : 225 , marginLeft : 300 , borderRadius : "100%" , color:'red' ,backgroundColor : 'lightgreen' , fontSize : "200%"}} > Quick Order !</button>
                 <button style = {{height:125 , marginTop: 10 , width : 225 , marginLeft : 150 , color:'red' , backgroundColor:'lightgreen' ,fontSize:"100%"}} > Catering/Party Order</button>

                 </p>

             </div>
        )         

     }
   


}


export default Home;