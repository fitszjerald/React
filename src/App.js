import React from 'react';
import Header from './components/section/Header'

import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';


class App extends React.Component {
  render(){
    return (
      <div>
        <Router>
          <Header/>
          <div className='container'>
            <div style={{paddingTop:60}}>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            </div>
          </div>
          
        </Router>  
      </div>
    );
  }
  
}

export default App;
