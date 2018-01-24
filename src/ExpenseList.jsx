import React from 'react'
import TableRow from './components/TableRow'
import TableRowSum from './components/TableRowSum'
import {map} from 'lodash'
import TableHeader from "./components/TableHeader";
import {connect} from 'react-redux';


class ExpenseList extends React.Component {

    componentWillReceiveProps(nextProps) {
        const {column, order} = this.props.sorting;
    }

    showDetailsForRow = (expense) => {
         this.props.onClick(expense)
    }

    changeStatus = (expense) => {
        this.props.changeStatus(expense)
        this.props.sortAndFilter({})
    }

    onChangeSort = (e) => {
        let column = (e.target.innerHTML)
        const order = this.props.sorting.order === "asc" ? "desc" : "asc";

        column = column.toLowerCase();
        if (column === "amount") {
            column = function (e) {
                return e.amount.value
            }
        }

        this.props.sortAndFilter({sorting: {
            column: column, order: order,
        }})

    }

    onFilter = (filterColumn) => (e) => {
        const {column, order} = this.props.sorting;
        const val = e && e.target.value;

        let filteredArr = Object.assign(this.props.filter, []);
        filteredArr.map(function (el) {
            if (el.column === filterColumn) {
                el.name = val;
            }
        })

        this.props.sortAndFilter({
            filter: filteredArr
        })
    }

    render() {
        return <div className="expenses-container">
            <div>
                <table className="table table-hover">
                    <TableHeader onHeaderClick={this.onChangeSort} sorting={this.props.sorting}/>
                    <tbody>
                    <tr>
                        <td/>
                        <td><input value={this.props.filter[0].name}
                                   onChange={this.onFilter(this.props.filter[0].column)}/></td>
                        <td><input value={this.props.filter[1].name}
                                   onChange={this.onFilter(this.props.filter[1].column)}/></td>
                        <td/>
                        <td/>
                    </tr>


                    {
                        map(this.props.sortedExpenses, (expense) => (
                            <TableRow data={expense}
                                      onClickAction={() => this.showDetailsForRow(expense)}
                                      onClickStatusAction={() => this.changeStatus(expense)}
                            />
                        ))
                    }
                    {<TableRowSum />}

                    </tbody>
                </table>

            </div>
        </div>
    }


}

const mapStateToProps = state => {
    return {
        expenses: Object.values(state.expenses.expenses),
        sortedExpenses: state.expenses.sortedExpenses,
        sorting: state.expenses.sorting,
        filter: state.expenses.filter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeStatus: (expense) => dispatch({
            type: 'CHANGE_STATUS',
            payload: expense
        }),
        onClick: (expense) => dispatch({
            type: 'SELECTED_EXPENSE',
            payload: expense.id
        }),
        sortAndFilter: (sortData) => dispatch({
            type: 'SORTandFILTER',
            payload: sortData
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseList);
