import React, { Component } from 'react';

class EnterNumber extends Component{
    constructor(props){
        super(props);
        this.state = {
            incrementNumber: '',
                }
    }

onIncrementNumber = (event)=> {
    this.setState({
        incrementNumber: event.target.value,
    })
}
decreaseNumber = (event)=>{
   this.props.decreaseNumber(this.state.incrementNumber)
}
    render(){
        console.log(this.state);
        return(
            <div>
            <button>Increase</button>
            <input onChange={this.onIncrementNumber} type="text" placeholder="enter increment Number" />
            <button onClick={this.decreaseNumber}>Decrease</button>
            {JSON.stringify(this.state.incrementNumber)}
            </div>
            
        )
        
    }
    
}
export default EnterNumber;