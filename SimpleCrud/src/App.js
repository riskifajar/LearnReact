import React, { Component } from 'react';
import NameAdd from './Components/NameAdd';
import ListName from './Components/ListName';
import './App.css';
const list = [{
  name: 'Riski',
  age: '24'
}];

localStorage.setItem('list', JSON.stringify(list));
class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      data : JSON.parse(localStorage.getItem('list'))
    };
    this.onAdd = this.onAdd.bind(this);
    this.hapus = this.hapus.bind(this);
    this.editSubmit = this.editSubmit.bind(this);
  }

  componentWillMount() {
    const data = this.getData();

    this.setState({data});
  }
  getData() {
    return this.state.data;
  }

  onAdd(name, age) {
    const data =this.getData();
    data.push({
      name,
      age
    });
    this.setState({data});
  }

  hapus(name) {
    const data = this.getData();
    const filterName = data.filter(
      datas => {
        return datas.name !== name
      }
    );
    this.setState(
      {data: filterName}
    );
  }

  editSubmit(name, age, oriName) {
    let data = this.getData();

    data = data.map(ev => {
      if(ev.name === oriName) {
        ev.name = name;
        ev.age = age;
      }
      return ev;
    });
    this.setState({data});
  }
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <h1>SIMPLE CRUD</h1>
          <NameAdd 
            onAdd = {this.onAdd}
          />
        </header>
        <section>
          {
            this.state.data.map(data => {
              return (
                <ListName 
                  key={data.name}
                  {...data}
                  hapus = {this.hapus}
                  editSubmit = {this.editSubmit}
                />
              );
            })
          }
        </section>
      </div>
    );
  }
}

export default App;
