import React from 'react';
import Header from './components/section/Header'
import './style/bootstrap.min.css'
import './style/bootstrap-rtl.min.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Product from './components/pages/Product';
import NoMatch from './components/pages/NoMatch';


class App extends React.Component {
  render(){
    return (
      <div>
        <Router>
          <Header/>
          <div className='container'>
            <div style={{paddingTop:70}}>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/product/:id' component={Product} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
                <Route component={NoMatch} />
              </Switch>
            </div>
          </div>
          
        </Router>  
      </div>
    );
  }
  
}

export default App;
