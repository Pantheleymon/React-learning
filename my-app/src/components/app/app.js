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

    onToggleIncrease = (id) => {
        // this.setState(({data}) => {
        //     const index = data.findIndex(elem => elem.id === id);
        //     const newItem = {...data[index], increase: !data[index].increase};
        //     const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

        //     return {
        //         data: newArr
        //     }
        // });

        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, increase: !item.increase};
                }
                return item;
            })
        }))
    }

    onToggleRise = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, rise: !item.rise};
                }
                return item;
            })
        }))
    }

    employersCount = () => {
        return this.state.data.length;
    }

    increaseCount = () => {
        return this.state.data.filter(item => item.increase).length;
    }

    render() {
        return (
            <div className="app">
                <AppInfo
                employersCount={this.employersCount}
                increaseCount={this.increaseCount}/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployersList 
                data={this.state.data}
                onDelete={this.deleteItem}
                onToggleIncrease={this.onToggleIncrease}
                onToggleRise={this.onToggleRise}/>
    
                <EmployersAddForm onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;