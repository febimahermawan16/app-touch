import React, {Component} from 'react'

// Assets
import './App.css'
import Routers from './lib/Routers'
import './Responsive.css'

class App extends Component{
  
  componentDidMount(){
    document.title = 'AppTouch - Free React Dashboard Template'
  }

  render(){
    return(
      <Routers />
    )
  }  
}

export default App;

