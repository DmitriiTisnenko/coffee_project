import './app-search.scss';

import { Component } from 'react';


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',

            buttonsData: [
                {className: 'filter__button', name: 'Brazil'},
                {className: 'filter__button', name: 'Kenya'},
                {className: 'filter__button', name: 'Columbia'},
                {className: 'filter__button', name: 'All'},
            ]
        }
    }
    

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.props.onUpdateSearch(term);
        this.setState({term});
    }

    render() {
        const {buttonsData} = this.state;
        const buttons = buttonsData.map(({className, name}) => {
            const active = this.props.filter === name;
            const clazz = active ? `${className} active` : className 
            return (
                <button className={clazz} onClick={() => this.props.onUpdateFilter(name)} key={name}>{name}</button>
            )
        })
        return (
            <div className="search">
                <div className='search__group'>
                    <label htmlFor="search__input" className="search__text" >Lookiing for</label>
                    <input
                    onChange={this.onUpdateSearch} 
                    type="text" id="search__input" 
                    className='search__input' 
                    placeholder='start typing here...'/>
                </div>

                <div className="filter">
                    <div className="search__text">Or filter</div>
                    <div className="filter__buttons">
                        {buttons}
                    </div>
                </div>
            </div>
        )
    }
} 

export default Search;