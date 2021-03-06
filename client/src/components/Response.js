import React from 'react'

const Response = ({ closeClick, text, copyClick, copied }) => {
    return (
        <div>
            <h3>Copy and send the link below to the receiver</h3>
            <hr />
            <div className='d-flex'>
                <span className='text-muted justify-content-center'>{text}</span>
                {copied ? <i onClick={copyClick}  data-bs-toggle="tooltip" data-bs-placement="top"
                    data-bs-custom-class="custom-tooltip"
                    title="Copied" className="bi bi-clipboard-check"></i> : <i onClick={copyClick} data-bs-toggle="tooltip" data-bs-placement="top"
                        data-bs-custom-class="custom-tooltip"
                        title="Copy to clipboard" className="bi bi-clipboard"></i>}
                {/* <button onClick={copyClick} className='btn btn-secondary mx-2'>{copied ? <i onClick={copyClick}  data-bs-toggle="tooltip" data-bs-placement="top"
                    data-bs-custom-class="custom-tooltip"
                    title="Copied" className="bi bi-clipboard-check"></i> : <i data-bs-toggle="tooltip" data-bs-placement="top"
                        data-bs-custom-class="custom-tooltip"
                        title="Copy to clipboard" className="bi bi-clipboard"></i>} </button> */}
            </div>

            <div className='text-center mt-3'>
                <button onClick={closeClick} className='btn btn-danger'>Close</button>
            </div>
        </div>
    )
}

export default Response;
