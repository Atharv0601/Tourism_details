import http from "./components/utils/http";
import {React , Component} from "react"
import Card from "./components/Card";
import Card2 from "./components/Card2";
import Card3 from "./components/Card3";
// import Detail from "./Detail";
import "./App.css"

class App extends Component {
  state = {  } 
  render() { 
    temp();
    async function temp() {
      console.log(await http.getResponse());
    }
    return (
      
      <div className="container">
        <div className="middle-container1">
        <Card/>  
        </div>
        <div className="middle-container2">
        <Card2/>
        </div>
        <div className="middle-container3">
        <Card3/>
        </div>
        </div>
      );
    }
}


export default App;
