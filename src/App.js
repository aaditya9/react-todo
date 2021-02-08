import './App.css';
import React from 'react';
import ListItems from './ListItems';
import {library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
library.add(faTrash); 

class App extends React.Component{
    constructor(props){
      super(props);
      this.state={
        items:[],
        currentItem:{
          text:'',
          key:''
        }
      }
      this.handleinput = this.handleinput.bind(this);
      this.addItem = this.addItem.bind(this);
      this.deleteItem = this.deleteItem.bind(this);
      this.setUpdate = this.setUpdate.bind(this);
    }
    handleinput(e){
      this.setState({
        currentItem:{
          text:e.target.value,
          key:Date.now()
        }
      })
    }
    addItem(e){
      e.preventDefault();
      const newitem = this.state.currentItem;
      if(newitem.text !== "")
      {
        const newItems = [...this.state.items, newitem];
        console.log(newItems);
        this.setState({
          items:newItems,
          currentItem :{
            text:'',
            key:''
          }
        })
      }
    }

    deleteItem(key){
      console.log(key,this.state);
      const filteredItem = this.state.items.filter(item => 
        item.key !== key);
      console.log(filteredItem);
      this.setState({
        items:filteredItem
      })

    }

    setUpdate(text, key){
      const items = this.state.items;
      
      items.forEach(item =>{
        if(item.key===key){
          item.text = text;
        }
      })

      this.setState({
        items:items
      })
    }

    render(){
      return(
        <div className ="App">
        <header>
          <form id="todo-form" onSubmit={this.addItem}>
            <input type="text"  placeholder="Enter text"
              value={this.state.currentItem.text}
              onChange={this.handleinput}/>
              <button type="submit">Add</button>
          </form>
        </header>
        <ListItems items={this.state.items}
          deleteItem = {this.deleteItem}
          setUpdate = {this.setUpdate }></ListItems>
          
        </div>
      );
    }
}


export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }



