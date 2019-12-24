import React, {Component} from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends Component {
  
  constructor() {
    super();
    this.listItem = [
      {task: 'Giặt quần áo', isComplete: true},
      {task: 'Quét nhà'},
      {task: 'Học ReactJs'}
    ];
  }
  render () {      
    return (
      <div className="App">    
        {
          this.listItem.length > 0 && this.listItem.map((item, index) => 
            <TodoItem item={item} key={index}/> 
        )
        }
        {this.listItem.length === 0 && 'Nothing here'} 
        
                          
      </div>
    );
  }
}

export default App;
