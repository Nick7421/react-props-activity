import React, { Component } from 'react';

class EnterNumber extends Component{
    constructor(props){
        super(props);
        this.state = {
            incrementNumber: 0,
                }
    }

onIncrementNumber = (event)=> {
    this.setState({
        incrementNumber: event.target.value,
    })
}
componentdecreaseNumber = (event)=>{
   this.props.decreaseNumber(this.state.incrementNumber)
}
componentincreaseNumber = (event) =>{
    this.props.increaseNumber(this.state.incrementNumber)
}
    render(){
        console.log(this.state);
        return(
            <div>
            <button onClick ={this.componentincreaseNumber}>Increase</button>
            <input onChange={this.onIncrementNumber} type="text" placeholder="enter increment Number" />
            <button onClick={this.componentdecreaseNumber}>Decrease</button>
            {JSON.stringify(this.state.incrementNumber)}
            </div>
            
        )
        
    }
    
}
export default EnterNumber;