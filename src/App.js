import React from 'react'
import TopBar from './top-bar'
import ExpenseList from "./ExpenseList";
import ContainerComponent from "./components/ContainerComponent";
import ExpenseDetailsComponent from "./components/ExpenseDetailsComponent";
import ExpenseForm from "./components/ExpenseForm";
import ModalContainer from "./components/ModalContainer";
import {connect} from "react-redux";

class App extends React.Component {

    // constructor(props) {
    //     super(props);
    //     const elements = initialExpenses.reduce((acc, e) => {
    //         acc[e.id] = e
    //         return acc
    //     }, {});
    //     this.state = {
    //         selectedElementId: initialExpenses[0].id,
    //         expenses: elements,
    //         showPopup: false
    //     };
    // }

    render() {
        return (
            <div>
                <TopBar/>

                <div className='container-fluid'>
                    <div className='row fill-height'>
                        <div className='col-md-8'>
                            <ContainerComponent>
                                {<ExpenseDetailsComponent />}
                            </ContainerComponent>
                        </div>
                        <div className='col-md-8 pb-3'>
                            <ExpenseList />
                        </div>
                        <div >
                            <input type="button" class="btn btn-primary" value="Add" onClick={this.showAddPopup}/>
                        </div>
                        <div>{
                            this.props.state ?
                                <ModalContainer onClose={this.hideAddPopup}>
                                    <ExpenseForm onAdd={this.onAdd} />
                                </ModalContainer> : null
                        }</div>
                    </div>
                </div>
            </div>
        )
    }

    showAddPopup = () => {
        this.props.showPopup();
    }

    hideAddPopup = () => {
        this.props.closePopup();
    }

    onAdd = (values) => {
        this.props.addExpense(values)
        this.props.closePopup();
    }
}

const mapStateToProps = (state) => {
    return {state:state.app}
}

const mapDispatchToProps = dispatch => {
    return {
        showPopup: () => dispatch({
            type: 'SHOW_POPUP',
            payload: ''
        }),
        closePopup: () => dispatch({
            type: 'CLOSE_POPUP',
            payload: ''
        }),
        addExpense: (expense) => dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        })
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
