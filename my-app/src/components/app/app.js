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
                {name: 'John', salary: 800, increase: false, id: 1},
                {name: 'Alex', salary: 3000, increase: true, id: 2},
                {name: 'Ivan', salary: 5000, increase: false, id: 3},
            ]
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
        const newObj = {name: name, salary: salary, increase: false, id: newId};

        this.setState(({data}) => {
            return {
                data: data.concat(newObj)
            }
        })
    }

    render() {    
        return (
            <div className="app">
                <AppInfo/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployersList 
                data={this.state.data}
                onDelete={this.deleteItem}/>
    
                <EmployersAddForm onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;