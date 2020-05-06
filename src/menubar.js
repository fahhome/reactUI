import React from 'react';
import ReactDOM from 'react-dom';
import {menuData} from './menuData.js';
import  DropDown from './DropDown.js';

class MenuBar extends React.Component {

     constructor(props){
         super(props);
         this.state={};
     }

     render(){

       

        console.log(menuData);

        var htmldynamic = [] ;

        //htmldynamic.push(<p/>);
        
        menuData.map(item => {
        htmldynamic.push( <a   style={{marginLeft:100 ,color:'red'}}   href="/"     >{item.label}</a> );
        });


        return(
           
        
            
            <div  style={{ marginBottom : 50 , backgroundColor:'yellow' , height:60 ,marginTop : 10 }}>  
                   

                   <h1 style = {{display: 'inline' , color:'green' , font : '100px' ,marginTop:10}}> QuickHomeBites </h1>
                  

                  {htmldynamic}

                  
               
                                     
                <ul   style={{ marginLeft : 0 ,float:'right'}}   >
                    <li>Login</li>
                    <li>SignUp</li>
                </ul>
                  
                

            </div>

           
        
          )
     }

}

export default MenuBar;