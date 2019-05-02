import React from 'react';


class Product extends React.Component {
    render(){
        const{params} = this.props.match
        return(
            <div>

            <h2>Product: {params.id}</h2>
            </div>
        )
    }
}

export default Product;