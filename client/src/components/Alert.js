import React from 'react'

const Alert = ({message, color, variant, onClick}) => {
  return (
    <div className='justify-content-center' style={{zIndex: 1, position: "absolute", display: "flex", justifyContent: "center"}}>
        <div className={`alert alert-${color} alert-dismissible fade show justify-content-center`} role="alert">
            <strong>{variant}</strong> {message}
            <button type="button" className="btn-close" onClick={onClick} data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    </div>
  )
}

export default Alert
