import { Component } from 'react';

import './employers-add-form.css';

class EmployersAddForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        const {onAdd} = this.props;
        const {name, salary} = this.state;
        if (/^(?:((([^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]'’,\-.\s])){1,}(['’,\-.]){0,1}){2,}(([^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]'’,\-. ]))*(([ ]+){0,1}(((([^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]'’,\-.\s])){1,})(['’\-,.]){0,1}){2,}((([^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]'’,\-.\s])){2,})?)*)$/.test(name) && salary > 0) {
            onAdd(name, salary);

            this.setState({
                name: '',
                salary: ''
            })
        }
    }


    render() {
        const {name, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form className="add-form d-flex" onSubmit={this.onSubmitForm}>
                    <input type="text" 
                            className="form-control new-post-label" 
                            name="name"
                            value={name}
                            placeholder="Как его зовут?"
                            onChange={this.onValueChange} />
                    <input type="number" 
                            className="form-control new-post-label"
                            name="salary"
                            value={salary}
                            placeholder="З/П в $?"
                            onChange={this.onValueChange} />
                    <button type='submit' className="btn btn-outline-light">Добавить</button>
                    </form>
            </div>
        );
    }
}

export default EmployersAddForm;