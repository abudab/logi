import React from 'react'
import TableTdDate from "./TableTdDate";
import TableTdDesc from "./TableTdDesc";
import TableTdCat from "./TableTdCat";
import {TableTdAmount} from "./TableTdAmount";
import TableTdStatus from "./TableTdStatus";

const TableRow = (props) => {


    return (
    <tr onClick={props.onClickAction}>
        <TableTdDate data={props.data}/>
        <TableTdDesc data={props.data}/>
        <TableTdCat data={props.data.category}/>
        <TableTdAmount amount={props.data.amount}/>
        <TableTdStatus onClickStatusAction={props.onClickStatusAction} status={props.data.status}/>
    </tr>)

}
export default TableRow