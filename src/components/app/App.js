import './App.css';

import Header from '../app-header/app-header';
import About from '../app-about/app-about';
import Search from '../app-search/app-search';
import Cards from '../app-cards/app-cards';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { url: '../../imgs/coffeGroup.jpg', name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99},
        { url: '../../imgs/coffeGroup.jpg', name: 'AROMISTICO Coffee 1 kg', country: 'Kenya', price: 6.99},
        { url: '../../imgs/coffeGroup.jpg', name: 'AROMISTICO Coffee 1 kg', country: 'Columbia', price: 6.99},
        { url: '../../imgs/coffeGroup.jpg', name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99},
        { url: '../../imgs/coffeGroup.jpg', name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99},
        { url: '../../imgs/coffeGroup.jpg', name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99}
      ],
      term: '',
      filter: ''
    }
  }

  searchCoffee = (data, term) => {
    if(term.length === 0) {
      return data;
    }

    return data.filter(item => {
      return item.name.indexOf(term) > -1
    })
  }

  onUpdateSearch = (term) => {
    this.setState({term});
  }

  filterCoffee = (data, filter) => {
    switch(filter) {
      case 'Brazil':
        return data.filter(item => item.country === 'Brazil');
      case 'Kenya':
        return data.filter(item => item.country === 'Kenya');
      case 'Columbia':
        return data.filter(item => item.country === 'Columbia');
      case 'All':
        return data;
      default:
        return data
    }  
  }

  onUpdateFilter = (filter) => {
    this.setState({filter})
  }

  render() {
    const {data, term, filter} = this.state;
    const visibleData = this.filterCoffee(this.searchCoffee(data, term), filter);

    return (
      <div className="App">
        <Header/>
        <About/>
        <Search 
        onUpdateSearch={this.onUpdateSearch} 
        onUpdateFilter={this.onUpdateFilter}
        filter={filter}/>
        <Cards data={visibleData} />
      </div>
    );
  }
}

export default App;
