import React from 'react'
import TableRow from './components/TableRow'
import TableRowSum from './components/TableRowSum'

import {map} from 'lodash'
import TableHeader from "./components/TableHeader";

class ExpenseList extends React.Component {
    showDetailsForRow = (expense)=> {
        this.props.onClick(expense)
    }

    changeStatus = (expense)=> {
        this.props.onChangeStatus(expense)
    }

    render(){
        return <div className="expenses-container">
            <div>
                <table className="table table-hover">
                    <TableHeader />
                    <tbody>
                    {
                        map(this.props.data, (expense) => (
                            <TableRow data={expense}
                                      onClickAction={() => this.showDetailsForRow(expense)}
                                      onClickStatusAction={()=>this.changeStatus(expense)}
                            />
                        ))
                    }
                    <TableRowSum data={this.props.data} />

                    </tbody>
                </table>

            </div>
        </div>
    }
}

export default ExpenseList