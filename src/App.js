import React from 'react'
import TopBar from './top-bar'
import ExpenseList from "./ExpenseList";
import {expenses} from "./data";
import ContainerComponent from "./components/ContainerComponent";
import ExpenseDetailsComponent from "./components/ExpenseDetailsComponent";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedElementId: expenses[0].id,
            expenses: expenses
        }
    }

    render() {
        return (
            <div>
                <TopBar/>

                <div className='container-fluid'>
                    <div className='row fill-height'>
                        <div className='col-md-4'>
                            <ContainerComponent>
                                <ExpenseDetailsComponent data={this.findElementWith(this.state.selectedElementId)}/>
                            </ContainerComponent>
                        </div>
                        <div className='col-md-8 pb-3'>
                            <ExpenseList data={this.state.expenses}
                                         onClick={this.changeSelectedItem}
                                         onChangeStatus={this.changeStatus}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    findElementWith = (id) => {
        let items = [...this.state.expenses]
        //let items =  Object.assign([], this.state.expenses);
        let item = items.find((el)=>el.id===id);
        return item;
    }

    changeSelectedItem = (expense) => {
        this.setState({
            selectedElementId: expense.id
        })
    }

    changeStatus = (expense) => {
        let id = expense.id;
        let items = [...this.state.expenses]
        let found = this.findElementWith(id);
        found.status=!found.status;

        this.setState({
            expenses : items
        })
    }
}


export default App
