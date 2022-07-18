import React from 'react';
import './Popup.css';
import Backdrop from './Backdrop';

export const Popup = (props) => {
    return (
        <div>
            <Backdrop show={props.show} onClick={props.modalClosed} />
            <div className='popup' style={{
                    opacity: props.show ? '1' : '0'
                }}>
                <img src={props.image} alt="tick" />
                <h2>{props.title}</h2>
                <p>{props.subtitle}</p>
                <div className='d-flex'>
                <span className='text-muted justify-content-center text-center d-none'>{props.text}</span>
                {props.copied ? <button onClick={props.copyClick}  data-bs-toggle="tooltip" data-bs-placement="top"
                    data-bs-custom-class="custom-tooltip"
                    title="Copied" >Copied <i className="bi bi-clipboard-check"></i></button> : <button onClick={props.copyClick} data-bs-toggle="tooltip" data-bs-placement="top"
                        data-bs-custom-class="custom-tooltip"
                        title="Copy to clipboard" >Copy to clipboard <i className="bi bi-clipboard"></i></button>}
            </div>
                <button onClick={props.closeClick}>OK</button>
            </div>
        </div>
    )
}
