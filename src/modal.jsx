import React from 'react'

const DIM_SCREEN_ID = 'dim-screen'

const Modal = ({visible, onDismiss, children}) => {

	const dismiss = (e) => {
		if(e.target.id === DIM_SCREEN_ID) {
			onDismiss()
		}
	}

	return visible ? (
		<div id={DIM_SCREEN_ID} className='dim-screen' onClick={dismiss} >
			{children}
		</div>
	) : null
}

export default Modal
