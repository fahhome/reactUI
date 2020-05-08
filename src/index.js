
import React from 'react';
import ReactDOM from 'react-dom';
import MainContainer from './maincontainer.js';
import MenuBar from  './menubar.js' ;
import Home from './Home.js';
import   FirstPage from './pages/FirstPage.js';
import   DishesPage from './pages/DishesPage.js';
import DisplayFormationtext from './displayformationtext.js' ;


class MyApp extends React.Component{

render(){

return(
   <div>
       <DishesPage/>
   </div>

)

}

}



ReactDOM.render(
  <MyApp/>,
  document.querySelector(".container")
);
