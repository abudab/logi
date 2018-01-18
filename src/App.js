import React from 'react'
import TopBar from './top-bar'
import ExpenseList from "./ExpenseList";
import {expenses as initialExpenses} from "./data";
import ContainerComponent from "./components/ContainerComponent";
import ExpenseDetailsComponent from "./components/ExpenseDetailsComponent";
import ExpenseForm from "./components/ExpenseForm";
import ModalContainer from "./components/ModalContainer";

class App extends React.Component {

    constructor(props) {
        super(props);
        const elements = initialExpenses.reduce((acc, e) => {
            acc[e.id] = e
            return acc
        }, {});
        this.state = {
            selectedElementId: initialExpenses[0].id,
            expenses: elements,
            showPopup: false
        };
    }

    render() {
        return (
            <div>
                <TopBar/>

                <div className='container-fluid'>
                    <div className='row fill-height'>
                        <div className='col-md-8'>
                            <ContainerComponent>
                                <ExpenseDetailsComponent data={this.state.expenses[this.state.selectedElementId]}/>
                            </ContainerComponent>
                        </div>
                        <div className='col-md-8 pb-3'>
                            <ExpenseList data={Object.values(this.state.expenses)}
                                         onClick={this.changeSelectedItem}
                                         onChangeStatus={this.changeStatus}
                            />
                        </div>
                        <div className='col-md-8 pb-3'>
                            <input type="button" class="btn btn-primary" value="Add" onClick={this.showAddPopup}/>
                        </div>
                        <div>{
                            this.state.showPopup ?
                                <ModalContainer onClose={this.hideAddPopup}><ExpenseForm onAdd={this.onAdd}/></ModalContainer> : null
                        }</div>
                    </div>
                </div>
            </div>
        )
    }

    showAddPopup = () => {
        this.setState({
            showPopup: true
        })
    }

    hideAddPopup = () => {
        this.setState({
            showPopup: false
        })
    }

    onAdd = (values) => {
        let expenses = Object.assign(this.state.expenses, {});
        expenses[values.id] = values;
        this.setState({
            expenses: expenses,
            showPopup: false
        })
    }

    changeSelectedItem = (expense) => {
        this.setState({
            selectedElementId: expense.id
        })
    }

    changeStatus = (expense) => {
        const {expenses} = this.state

        const updatedExpense = {...expense, status: !expense.status}
        const updateExpenses = {
            ...expenses,
            [updatedExpense.id]: updatedExpense
        }

        this.setState({
            expenses: updateExpenses
        })
    }
}


export default App
