import React from 'react'
import TableRow from './components/TableRow'
import TableRowSum from './components/TableRowSum'
import _ from 'lodash';
import {map} from 'lodash'
import TableHeader from "./components/TableHeader";
import {connect} from 'react-redux';


class ExpenseList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {};
        this.state.sorting =
            {order: "asc", column: ""};
        this.state.sortedExpenses = props.expenses;
        this.state.filter =
            [{column: "description", name: ""},
                {column: "category", name: ""}];
    }

    componentWillReceiveProps(nextProps) {
        const {column, order} = this.state.sorting;
        this.setState({
            sortedExpenses: this.sortAndFiler(nextProps.expenses, this.state.filter, column, order)
        })
    }

    showDetailsForRow = (expense) => {
         this.props.onClick(expense)

    }

    changeStatus = (expense) => {
        this.props.changeStatus(expense)
    }

    onChangeSort = (e) => {
        let column = (e.target.innerHTML)
        const order = this.state.sorting.order === "asc" ? "desc" : "asc";

        column = column.toLowerCase();
        if (column === "amount") {
            column = function (e) {
                return e.amount.value
            }
        }

        this.setState({
            sorting: {
                column: column,
                order: order,
            },
            sortedExpenses: this.sortAndFiler(this.state.sortedExpenses, this.state.filter, column, order)
        })
    }

    filterWith = (filtered, filteredArr) => {
        filteredArr.forEach(function (fel) {
            filtered = _.filter(filtered, function (el) {
                return el[fel.column].includes(fel.name);
            });
        })
        return filtered;
    }

    sortAndFiler = (collection, filter, sortColumn, sortOrder) => {
        return _.orderBy(this.filterWith(collection, filter), sortColumn, sortOrder);
    }

    onFilter = (filterColumn) => (e) => {
        const {column, order} = this.state.sorting;
        const val = e && e.target.value;

        let filteredArr = Object.assign(this.state.filter, []);
        filteredArr.map(function (el) {
            if (el.column === filterColumn) {
                el.name = val;
            }
        })

        this.setState({
            filter: filteredArr,
            sortedExpenses: this.sortAndFiler(this.props.expenses, filteredArr, column, order)
        })
    }

    render() {
        return <div className="expenses-container">
            <div>
                <table className="table table-hover">
                    <TableHeader onHeaderClick={this.onChangeSort} sorting={this.state.sorting}/>
                    <tbody>
                    <tr>
                        <td/>
                        <td><input value={this.state.filter[0].name}
                                   onChange={this.onFilter(this.state.filter[0].column)}/></td>
                        <td><input value={this.state.filter[1].name}
                                   onChange={this.onFilter(this.state.filter[1].column)}/></td>
                        <td/>
                        <td/>
                    </tr>


                    {
                        map(this.state.sortedExpenses, (expense) => (
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
        expenses: Object.values(state.expenses)
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
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseList);
