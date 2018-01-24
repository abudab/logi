import React from 'react'
import {connect} from 'react-redux'
function addAmount(a, b) {
    return a + parseFloat(b.amount.value);
}

function isAllDone(data){
    return data.filter(el => !el.status).length ===0;
}

const TableRowSum = (props)=> {
    let sum = props.data.reduce(addAmount, 0);
    let allDone = isAllDone(props.data)? "All Done!" : "";
    return (
        <tr><td/><td/><td/><td>SUM: {sum}</td><td>{allDone}</td></tr>
    )

}

const mapStateToProps = (state) => {
    return { data: Object.values(state.expenses.expenses) }
}

export default connect(mapStateToProps)(TableRowSum)