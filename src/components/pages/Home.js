import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
class Home extends React.Component {
    constructor(props){
    super(props)
        this.state = {
            results:[]
        }
    }

    componentDidMount(){

        axios.get('https://randomuser.me/api/?results=9')
        .then(n => n.data)
        .then(res =>(
            this.setState({
                results:res.results
            })
        )
        )
    }

    render(){
        const {results} = this.state
        console.log(results)
        const resultsList = results.map(item =>{
            return(
                <div>
                
                <div className="col-lg-4" style={{marginBottom:30,marginRight:60}}>
                
                    <div className="card" style={{width: "18rem"}}>
                        <img src={item.picture.thumbnail} className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">{item.name.first} {item.name.last}</h5>
                            <p className="card-text"></p>
                            <Link to={`/product/${item.id}`} className="btn btn-primary" >Go somewhere</Link>
                        </div>
                    </div>
                </div>
                </div>
                               
            )
        }
        )

        return(
            <div>
                <div className="jumbotron">
                    <div className="container">
                    <h1 className="display-3">Hello, world!</h1>
                    <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
                    
                </div>
                </div>
                <div className='row'>                
                {resultsList}
                </div> 
            </div>
        )
    }
}

export default Home;