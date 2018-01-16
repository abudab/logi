import React from 'react'

const ContainerComponent = (props) => {
    return <div className="expenses-container">
        {props.children}
    </div>
}

export default ContainerComponent