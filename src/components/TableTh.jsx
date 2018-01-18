import React from 'react'

const TableTh = (data) => {
    let sortingChar = "";//⇧
    if(data.sorting.column === data.value){
        sortingChar = data.sorting.order ==="asc" ? "up":"down" ;
    }
    return <th>
        {data.value}</th>
}

export default TableTh