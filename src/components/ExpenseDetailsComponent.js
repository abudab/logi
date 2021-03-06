import React from 'react'
import {connect} from 'react-redux'

const ExpenseDetailsComponent = (props) => {
    return <div >
        <div><span>Date: </span><span>{props.data.date}</span></div>
        <div><span>Description: </span><span>{props.data.description}</span></div>
        <div><span>Category: </span><span>{props.data.category}</span></div>
        <div><span>Amount: </span><span>{props.data.amount.currency}{props.data.amount.value}</span></div>
        <div><span>Status: </span><span>{!props.data.status ? 'PENDING':'DONE'}</span></div>
    </div>
}

const mapStateToProps = state => {
    return {
        data: state.expenses.expenses[state.selected]
    }
}

export default connect(mapStateToProps)(ExpenseDetailsComponent);