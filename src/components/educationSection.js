import App from "../App";
import React,{Component} from "react";

 class Education extends Component{
    constructor(){
        super()

        this.state = {
            educationInfo :{
            schoolName : '' ,
            studyTitle : '' ,
            studyDate : '' ,
            }
        }
          
    }

    handleChange=(e)=>{
        this.setState({
         educationInfo : {[e.target.id] :e.target.value}
        })
      }
    

    

    handleSubmit = (e)=>{
        e.preventDefault()
        console.log(this.state)
      }

      handelEdit = () => {
         
         
      }



    render(){
      
        
        return (
          <div className='educationDiv'>
              <form>
                <legend> Education</legend>
                <label htmlFor="schoolName">School name:</label>
                <input  type = "text"  id = "schoolName"  onChange={this.handleChange.bind(this)} /><br/>

                <label htmlFor="studyTitle">Title of study:</label>
                <input  type = "text"  id = "studyTitle" onChange={this.handleChange} /><br/>

                <label htmlFor="studyDate">Graduation date:</label>
                <input  type = "text"  id = "studyDate"  onChange={this.handleChange}/> <br/>

                <button type="button">Edit</button>
                <button  onClick={this.handleSubmit}>Submit</button>
            
            </form>
          </div>  
        )
    }
}





export default Education