import React, { useState, useRef, useEffect } from 'react'
import { uploadFile } from '../API/api';
import Alert from './Alert';
import Modal from './Modal';
import Response from './Response';
import copy from "copy-to-clipboard";  

const Transfer = () => {
    const ownerInput = useRef();
    const passwordInput = useRef();
    const emailInput = useRef();

    const [files, setFile] = useState(null);
    const [message, setMessage] = useState("");
    const [alert, setAlert] = useState(false);
    const [variant, setVariant] = useState("");
    const [color, setColor] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [link, setLink] = useState("");
    const [copied, setCopied] = useState(false);

    function handleShare(e) {
        e.preventDefault();

        const enteredOwnerInput = ownerInput.current.value;
        const enteredPasswordInput = passwordInput.current.value;
        const enteredEmailInput = emailInput.current.value;

        if (enteredOwnerInput === "") {
            setMessage("You should check in on some of those fields below.");
            setAlert(true);
            setVariant("Warning");
            setColor("warning")
        }
        else {
            setAlert(false);
            const formData = new FormData();
            formData.append('owner', enteredOwnerInput);
            formData.append('password', enteredPasswordInput);
            formData.append('email', enteredEmailInput);
            formData.append('file', files);
            const upload = uploadFile(formData);
            console.log(upload);
            setLink("https://www.c-sharpcorner.com/article/how-to-copy-text-to-clipboard-using-reactjs/");
            setShowModal(true)
        }
    }

    const closeModal = (e) => {
        e.preventDefault();
        setShowModal(false);
        setCopied(false);
    }

    const handleCopy = (e) => {
        setCopied(true);
        copy(link);
    }

    return (
        <div>
            <Modal show={showModal}>
                <Response text={link} closeClick={closeModal} copied={copied} copyClick={handleCopy}/>
            </Modal>
            {alert && <Alert message={message} variant={variant} color={color} onClick={() => { setAlert(false) }} />}
            <h1 className='text-center pt-3'>The Simplest way and secure your file across the internet.</h1>
            {/* <h2 className='text-center' style={{fontFamily: "Algerian", fontSize: "3rem",  letterSpacing: "0.7rem"}}>Big Data</h2> */}

            <div className='share_form_wrapper'>
                <div className="row g-4">
                    <div className="col-md-6 col-lg-6">
                        <div className="card bg-light text-dark">
                            <div className="card-body ">

                                <h3 className="card-title mb-5 text-center">Add your files <i class="bi bi-plus-circle-fill"></i></h3>

                                <div className="mb-3">
                                    <label htmlFor="sender" className="form-label text-left">Sender's name*</label>
                                    <input type="text" className="form-control" id="sender" ref={ownerInput} required />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="shareemail" className="form-label text-left">Email address*</label>
                                    <input type="email" className="form-control" id="shareemail" ref={emailInput} />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="pwd" className="form-label text-left">Secure your file with password (Optional)</label>
                                    <input type="password" className="form-control" id="pwd" ref={passwordInput} />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="file" className="form-label text-left">Upload your file here (mp3, mp4, PNG, Jpeg)*</label>
                                    <input type="file" className="form-control" id="file" required onChange={e => { setFile(e.target.files[0]) }} />
                                </div>

                                <div className="mb-3 mt-3 text-center">
                                    <button style={{ borderRadius: "30px", boxShadow: "1px 1px #888888" }} className='btn btn-success btn-lg' onClick={handleShare} data-bs-toggle={showModal ? "modal" : ""} data-bs-target={showModal ? "#exampleModal" : ""}>Share file <i className="bi bi-share text-dark mx-1"></i></button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Transfer
