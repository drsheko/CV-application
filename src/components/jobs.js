import React,{Component} from "react";
import { ReactDOM } from "react";
class Work extends Component{
    constructor(){
        super()
          
        this.state = {
            companyName : '',
            positionTitle : '',
            mainTasks : '',
            startDate : '',
            quiteDate : '' ,

        }
    }

    handleChange=(e)=>{
        this.setState({
         [e.target.id] :e.target.value
        })
      }
    

    

    handleSubmit = (e)=>{
        e.preventDefault()
        let details = document.querySelector('#details')
        details.textContent += this.state.schoolName  
                              
    
      }

    render(){
        return (
            <div className=''>
              <form>
                <legend> Work Experience</legend>
                <label htmlFor="companyName">Company name:</label>
                <input  type = "text"  id = "companyName" onChange={this.handleChange} /><br/>

                <label htmlFor="positionTitle">Title of position:</label>
                <input  type = "text"  id = "positionTitle" onChange={this.handleChange} /><br/>

                <label htmlFor="mainTasks">Main tasks:</label>
                <input  type = "text"  id = "mainTasks"  onChange={this.handleChange}/> <br/>

                <label htmlFor="startDate">start date:</label>
                <input  type = "date"  id = "startDate" onChange={this.handleChange} /><br/>

                <label htmlFor="quiteDate"> till:</label>
                <input  type = "date"  id = "quiteDate" onChange={this.handleChange} /><br/>

                <button type="button">Edit</button>
                <button  onClick={this.handleSubmit.bind(this)}>Submit</button>
            
            </form>
          </div>  
        )
    }
}


export default Work ;