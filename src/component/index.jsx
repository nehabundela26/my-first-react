import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import ListItem from '../component/table/list-item.jsx';
import data from '../component/table/data.json';
import Search from '../component/table/search';

class Main extends Component {
  constructor(props){
    super(props)
    this.state = {
      data:data
    }
    this.sortBy = this.sortBy.bind(this);
  }

  sortBy(key){
    this.setState({
      data:data.sort((a,b) => a[key] < b[key])
    })
  }

  deleteUser = (index,e) => {
    const user = Object.assign([],this.state.data);
    user.splice(index,1);
    this.setState({data:user});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Neha first react app</h1>
        </header>
        <p className="App-intro">
          Welcome in the world of react js
        </p>
        <Search />
        <ListItem  data={this.state.data} sortBy={this.sortBy} deleteEvent={this.deleteUser.bind(this)}/>
      </div>
    );
  }
}

export default Main;
