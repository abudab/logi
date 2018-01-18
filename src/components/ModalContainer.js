import React from 'react'


const ModalContainer = (props) => {
    const onClickOutside = (ev)=>
    {
        if(ev.target.className === "dim-screen"){
            props.onClose();
        }
    }

    return (<div onClick={onClickOutside} className="dim-screen">
        <div className="mrWhite">
        {props.children}
        </div>
    </div>)
}

export default ModalContainer