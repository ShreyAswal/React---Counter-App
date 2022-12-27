import React, {Component} from "react";
console.log("wow")
 export default class Logic extends Component {
    constructor(){
        super();
        this.state = {
            counter : 0
        }
    }
    


    add() {
        this.setState({counter : this.state.counter + 1})
    }

    subtract(){
        this.setState({counter : this.state.counter - 1})
    }

    reset(){
        this.setState({counter : 0 })
    }
    

    render(){
        return(
            <>
                 
                      
                <div className="App">
                    
                    <h1>Counter App</h1>
                    <h1>{this.state.counter}</h1>                     
                    <span className='controls'>
                    <button onClick={() => this.add()} >+</button>
                    <button onClick={()=>this.subtract()}>-</button>
                    <button onClick={()=>this.reset()} className='reset'>Reset</button>   
                    </span>
                    <h2>Great Work ;)</h2>
                </div>         
            </>
        )
    }
}

// export default logic


