import React from "react";

class Ninjas extends React.Component{
    render(){
        // console.log(this.props)

        const {name, age, belt} = this.props  // Destructuring
        return(
            <div className="ninja">
                <div>name : {name}</div>
                <div>age : {age}</div>
                <div>belt : {belt}</div>
            </div>
        )
    }
}

export default Ninjas;