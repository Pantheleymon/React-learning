import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {name: 'John', salary: 800, increase: false, rise: false, id: 1},
                {name: 'Alex', salary: 3000, increase: false, rise: false, id: 2},
                {name: 'Ivan', salary: 5000, increase: false, rise: false, id: 3},
            ],
            term: ''
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newId = this.state.data[this.state.data.length - 1].id + 1;
        const newObj = {
            name: name,
            salary: salary,
            increase: false,
            rise: false,
            id: newId
        };

        this.setState(({data}) => {
            return {
                data: data.concat(newObj)
            }
        })
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]};
                }
                return item;
            })
        }))
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1;
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term: term});
    }

    render() {
        const {data, term} = this.state;
        const employers = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const visibleData = this.searchEmp(data, term);

        return (
            <div className="app">
                <AppInfo
                employers={employers}
                increased={increased}/>
    
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter/>
                </div>
    
                <EmployersList 
                data={visibleData}
                onDelete={this.deleteItem}
                onToggleProp={this.onToggleProp}/>
    
                <EmployersAddForm onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;