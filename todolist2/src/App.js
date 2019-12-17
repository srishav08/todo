import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import img from './pencil.png';
import axios from 'axios';

class App extends Component {

  constructor() {
    super();
    this.state = {
      todo: [],
      input: ''
    }
  }

  componentDidMount() {
    const temptodo = [];
    axios
      .get(`/api/todo`)
      .then(todo => {
        todo.data.map(todo => temptodo.push(todo))
        console.log(temptodo)
        this.setState({ todo: temptodo })
      })
  }

  handleDelete = (e) => {
    const todo = this.state.todo.filter(todolist => todolist.id !== e.id)
    this.setState({ todo })
  }


  handleInputChange = (e) => {
    this.setState({ input: e.target.value })
  }


  handleaddtodo = (e) => {
    var temptodo = [];
    var options = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',

      },
      data: {
        'id': '',
        'task': this.state.input

      }

    }
    axios
      .post(`/api/addtodo`, options)
      .then().catch(error => console.log(error))


  }


  render() {
    return (
      <div className="App">
        <div className="container App-header">
          <ul className="App-list">
            <img src={img} alt="my todo app" />
            {this.state.todo.length === 0 ? <h3>ADD YOUR TODO LIST ITEMS</h3> :
              (this.state.todo.map(todo =>
                <div className="row">
                  <li key={todo.id}>
                    <div className="col-lg">
                      {todo.task.length < 20 ? todo.task : todo.task.substr(0, 20) + '...'}
                    </div>
                  </li>
                  <div className="col-lg">
                    <button onClick={() => this.handleDelete(todo)} >
                      X
                    </button>
                  </div>

                </div>

              ))}

          </ul>
          <div className="form-group">
            <form onSubmit={(e) => this.handleaddtodo(e)} >
              <input type="text" name="task" onChange={(e) => this.handleInputChange(e)} ></input>
              <button type="submit" id="Add-button btn btn-sm">+ ADD</button>
            </form>
          </div>
        </div>
      </div >
    );
  }
}

export default App;
