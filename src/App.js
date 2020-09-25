import { render } from '@testing-library/react';
import { BrowserRouter as Router , Route} from 'react-router-dom'
import React,{Component} from 'react';
import Todo from './Components/Todo'
import AddTodo from './Components/AddTodo'
import About from './pages/About'
import {Link} from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';



export class App extends Component {

  state = { 
    todos :[
        {
          id : uuidv4(),
          todo : 'Complete login page',
          completed :false
        },
        
        {
          id : uuidv4(),
          todo : 'Complete Registration page',
          completed : false
        }
      ]
    }
    styleA = () => {
      return {
          fontFamily : " Arial, Helvetica, sans-serif",
         
      }
  }
  titleStyle = () => {
    return {
        fontFamily : " Arial, Helvetica, sans-serif",
        textAlign:"center",
        fontWeight:"bold",
        color:'red',
        padding:"5px",
        border:"2px solid black",
        boxShadow:"5px 10px black",
        backgroundColor: "#343a40"
    }
}
  change = (id) => {
    this.setState({todos:this.state.todos.map(t => {
      if(t.id === id) {
        t.completed = !t.completed
      }
      return t;
    }) });

  }
  remove = (id) => {
    this.setState({todos: [...this.state.todos.filter(t => t.id !== id)]
    });
  }
 
  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      todo:title,
      complete:false

    }
   this.setState({todos:[...this.state.todos, newTodo]});

  }
 

    render() {
      const linkStyle = {
        textDecoration:"none",
        padding:"5%",
        color:"black",
    

      }
      const navStyle = {
        textAlign:"center"
      }
    
      return (
        <Router>
          <div style={this.styleA()}>
            <h1 style={this.titleStyle()}>To-Do List </h1> <nav style={navStyle}> <Link style={linkStyle} to='/' >Home</Link> | <Link style={linkStyle} to="/about">About</Link>
           
           
            </nav>
            <Route exact path="/" render={props => (
              <React.Fragment>
                   <AddTodo addTodo={this.addTodo}/>
                  <Todo todos ={ this.state.todos} change={this.change} remove={this.remove}/>

              </React.Fragment>
            )} />
            <Route path="/about" component={About}/>
         
        </div>
       </Router>
        
        
      );
    }
    
  
  
  
  
  
  
  
  
  
  }
 

  

export default App;
