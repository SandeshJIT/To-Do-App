import React, { Component } from 'react'



export default class AddTodo extends Component {
    state = {
        title : ''
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title : ''});

    }
    onChange = (e) => this.setState({ [e.target.name]: e.target.value});
   
    
  
    render() {
        return (
           <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
               <input type="text" name="title" placeholder="Enter your to do list" value={this.state.title}  onChange={this.onChange}  style={{width:"95%" , padding:"5px" , height:"20px"}}></input>
               <input type="submit" value="Add" name="add" className="btn"  style={{flex:"1"}}></input>
            </form>
        )
    }
}
