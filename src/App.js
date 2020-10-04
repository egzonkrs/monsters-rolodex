import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';


class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };
  
  render(){
    const { monsters, searchField } = this.state;
    // ^ njejt si kto constantet posht veq kjo nalt osht ni menyr ma e shpejt dhe ma e lehte. 
    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      //includes kthen true ose false based nese strigu include stringun qe e kem shkru ne serchField 
      );
    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>
        <SearchBox placeholder='Search Monsters' handleChange={ this.handleChange } />
        <CardList monsters = { filteredMonsters } />
      </div>
    );
  }
}

export default App;