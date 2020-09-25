import React, { Component } from 'react'


export class TodoItem extends Component {
    getStyle = () => {
        return {
            backgroundColor:'#FBB13C',
            
            padding:'1px',
            borderBottom: "2px solid black",
            textDecoration : this.props.t.completed ? 'line-through': 'none',
            


        }
    }
    btnStyle = {
        float:"right",
        marginRight:"3%",
        backgroundColor:"red",
        FontWeight:"bold",
        
    }
   
    render() {
        const {todo,id} = this.props.t;
        return (
            <div style={this.getStyle()}>
                
               <p> 
                   <input type="checkbox" onChange={this.props.change.bind(this , id)}/>  {todo}
                   <button onClick={this.props.remove.bind(this , id)} style={this.btnStyle}>Remove</button>
               </p>
               
              
            </div>
        )
        
    }
    
  
    
}

export default TodoItem
