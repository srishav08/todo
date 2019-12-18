import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import img from './pencil.png';

class App extends Component {

  constructor() {
    super();
    this.state = {
      todo: [],
      input: "",
      id: 1,
      flag: 0
    }
  }



  handlehide = () => {
    if (this.state.flag === 1) {
      this.setState({ flag: 0 })
    }
    else {
      this.setState({ flag: 1 })
    }

  }


  handleInputChange = (e) => {
    this.setState({ input: e.target.value })
  }


  handleaddtodo = (e) => {
    var temptodo = { 'id': this.state.id, 'task': this.state.input };
    this.setState({ id: temptodo.id + 1 })
    console.log('addtodo clcked')
    var temparr = [...this.state.todo];
    temparr.push(temptodo);
    this.setState({ todo: temparr });
    this.setState({ flag: 0 });
    console.log(temparr)
    console.log(temparr)

  }


  render() {
    return (
      <div className="App">
        <div className="container App-header">
          <div className="row">
            <div className="col-sm">
              <h2>Todo</h2>
            </div>
            <div className="col-sm ">
              <button onClick={(e) => this.handlehide(e)}>+</button>
            </div>
          </div>
          <ul className="App-list">
            {this.state.todo.length === 0 ? <h5>ADD YOUR TODO LIST ITEMS</h5> :
              (this.state.todo.map(todo =>
                <div className="row border-bottom">
                  <div className="col-sm">
                    <li key={todo.id}>
                      {todo.task.length < 20 ? todo.task : todo.task.substr(0, 20) + '...'}
                    </li>
                  </div>

                </div>

              ))}
            {this.state.flag === 0 ? <h6></h6> :
              <div className="form-group">
                <form onSubmit={(e) => this.handleaddtodo(e)} >
                  <input type="text" name="task" onChange={(e) => this.handleInputChange(e)} ></input>
                  <button type="submit" id="Add-button btn btn-sm">+ ADD</button>
                </form>
              </div>}
          </ul>
        </div>

      </div>);
  }
}

export default App;
