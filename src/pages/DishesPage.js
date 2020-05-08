import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import  '../css/jquery.dataTables.css';
import MenuBar from '../menubar.js';
const $ = require('jquery');
$.DataTable = require('datatables.net');

class DishesPage extends React.Component{

     constructor(props){

        super(props);
        this.state = {
            dishes : [],
            errormsg : null
        }; 

     }

     
    componentDidMount(){
       
        const tableref = this.el ;
        this.$el = $(this.el)
         
         axios.get('http://localhost:8080/api/dishes')
              .then(response => {
                  console.log(response)
                  this.setState({dishes: response.data})

                  this.$el.DataTable({
                    data : this.state.dishes,
                    columns : [
                        {
                            title: 'Name' ,
                            data :  'name'
                        } ,

                        {
                            title : 'Price',
                            data : 'unitPrice'
                        },
                        {
                            title : 'CookId',
                            data : 'cookId',
                        },
                        {
                            title : 'Description',
                            data : 'description'
                        }
                      
                    ],
                    "columnDefs": [ {
                        "targets": 4,
                        "data": "data",
                        "render": function ( data, type, full, meta ) {
                            return "<button class='view_btn' data-id='"+data+"'>Place Order</button>"
                          }
                    } ]
                })
              })
              .catch(error => {
                  console.log(error)
                  this.setState({errormsg : 'error occured'})
              })

        
        this.$el.on('click', '.view_btn', function(){
            console.log("Button Clicked");
          });
        
    }

    componentWillUnmount(){
         
        this.$el.DataTable().destroy(true);

    }

     render(){

          const dishes  = this.state.dishes;
          const errormsg = this.state.errormsg;
          
          
         
          //we can use the if statements inside render but not inside return
          /*if(dishes.length > 0){
            <h1>haudh</h1>
          }
          else{
           <h1>ads</h1>
           }*/

     

          return(
             <div>
               
            <MenuBar/>

            <h1>Select your dish</h1>
            
              {
                  errormsg ? <div>Error occured</div> : null
              }

              <div>
                   <table className="display" width = "80%" ref={el => this.el = el}>
                   </table>
              </div>

             </div> 

          )


     }


}



export default DishesPage;