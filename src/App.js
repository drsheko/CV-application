import React , {Component} from "react";
import Education from "./components/educationSection";
import Work from "./components/jobs" ;
import GeneralInformation from "./components/generalInformation";


class App extends Component{
  constructor(){

    super()

    this.state = {
      cv : []
    }
    
  }
  

  
    render(){
      return (
        <div>
          <GeneralInformation/>
         <Education />
          <Work />
          

          
        </div>
      )
    }
  }


export default App;

