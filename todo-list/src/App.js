import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import tick from './img/tick.svg';
class App extends Component {

  constructor() {
    super();
    this.state = {
      newItem: '',
      listItem: [
        { task: 'Giặt quần áo', isComplete: false },        
        { task: 'Quét nhà', isComplete: false },
        { task: 'Học ReactJs', isComplete: true }
      ]
    }
  }

  onItemClick = (item) => {
    return (event) => {
      const isComplete = item.isComplete;
      const { listItem } = this.state
      const index = this.state.listItem.indexOf(item)
      this.setState({
        listItem: [
          ...listItem.slice(0, index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...listItem.slice(index + 1)
        ]
      })
    }
  }

  onKeyUp = (event) => {
    let text = event.target.value;
    if (event.keyCode === 13) { //enter key    

      text = event.target.value;

      console.log(text);
      if (!text || text === '') {
        return;
      }

      text = text.trim();
      if (!text) { return; }


      this.setState({
        newItem: '',
        listItem: [
          { task: text, isComplete: false },
          ...this.state.listItem
        ]
      })
    } 


  }

  onChange = (event) => {
    this.setState({
      newItem: event.target.value
    });

  }
  render() {
    const { listItem, newItem } = this.state;
    return (
      <div className="App">
        <div className="Header">
          <img width={28} src={tick} alt="" />
          <input
            type="text"
            placeholder="Please enter your task"
            onKeyUp={this.onKeyUp}
            value={newItem}
            onChange={this.onChange}
          />
        </div>
        {
          listItem.length > 0 ?
            listItem.map((item, index) =>
              <TodoItem
                item={item}
                key={index}
                onClick={this.onItemClick(item)}                
              />) : 'Nothing here'}

      </div>
    );
  }
}

export default App;
