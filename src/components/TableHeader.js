import React from 'react'
import TableTh from "./TableTh";

class TableHeader extends React.Component {

    onHeaderClick = (ev) =>{
        this.props.onHeaderClick(ev)
    }

    render(){
        return (
        <thead>
        <tr onClick={this.onHeaderClick} style={{cursor: 'pointer'}}>
            <TableTh value='Date' sorting={this.props.sorting} />
            <TableTh value='Description' sorting={this.props.sorting}/>
            <TableTh value='Category' sorting={this.props.sorting}/>
            <TableTh value='Amount' sorting={this.props.sorting}/>
            <TableTh value='Status' sorting={this.props.sorting}/>
        </tr>
        </thead> )
    }
}

export default TableHeader