import React from 'react'

export const TableTdAmount = ({amount}) => {
    return <td>{amount.currency}{amount.value}</td>
}
