import React from 'react'

class TableHeader extends React.Component {

    onHeaderClick = () =>{
        
    }

    render(){
        return (
        <thead>
        <tr onClick={this.onHeaderClick} style={{cursor: 'pointer'}}>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Status</th>
        </tr>
        </thead> )
    }
}

export default TableHeader