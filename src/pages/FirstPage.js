import React from 'react';
import ReactDOM from 'react-dom';
import MenuBar   from '../menubar.js';
import  Home  from '../Home.js';

class FirstPage extends React.Component{


       constructor(props){
            super(props);
            this.state = {}
       }

     render(){


          return(
               
              <div>

               <MenuBar/>
               <Home/>
                   
              </div>
                 
             

          )


     }


}

export default FirstPage;