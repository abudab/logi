import React from 'react'

const TableTdStatus = (props) => {
    const onClickStatusAction = (ev)=>
    {
        ev.stopPropagation()
        props.onClickStatusAction();
    }
    return <td style={{cursor: 'pointer'}} onClick={onClickStatusAction}>{!props.status ? 'PENDING':'DONE'}</td>
}

export default TableTdStatus