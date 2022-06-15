import React , {Component} from "react";
import { ReactDOM } from "react";
class GeneralInformation extends Component {
    constructor(){

        super()
    
        this.state = {
          
               firstName: '',
               lastName : "",
               phoneNumber: '',
               email : '' ,
          
        }
      }
      handleChange=(e)=>{
        this.setState({
         [e.target.id] :e.target.value
        })
      }
    
      handleSubmit = (e)=>{
        e.preventDefault()
        
    
      }
        render(){
          return (
            <div>
              <form>
                <legend> General Information</legend>
                    <label htmlFor="firstName">First name:</label>
                    <input  type = "text"  id = "firstName" onChange={this.handleChange} /><br/>
    
                    <label htmlFor="lastName">Last name:</label>
                    <input  type = "text"  id = "lastName" onChange={this.handleChange} /><br/>
    
                    <label htmlFor="email">Email:</label>
                    <input  type = "email"  id = "email" onChange={this.handleChange} /><br/>
    
                    <label htmlFor="phone">Phone number:</label>
                    <input  type = "text"  id = "phone"  onChange={this.handleChange}/> <br/>
    
                    <button type="button">Edit</button>
                    <button  onClick={this.handleSubmit.bind(this)}>Submit</button>
                
              </form>
             
              
              
            </div>
          )
        }
}


export default GeneralInformation ;