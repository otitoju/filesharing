import React, { useState, useRef, useEffect } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import { useParams } from 'react-router-dom';
import { getFile } from '../API/api';

function Download(props) {
    const [sender, setSender] = useState();
    const [passwordExist, setPasswordExist] = useState(false);

    const { id } = useParams();
    useEffect(() => {
        async function getSingleFile() {
            const file = await getFile(id);
            if(file.file.password != null || file.file.password != "") {
                setPasswordExist(true);
            }
            setSender(file.file.owner);
            setPasswordExist(false);      
        }
        getSingleFile();
    }, []);
    return (
        <div className="container my-5" id="diva">
            <div className="row justify-content-center text-left">
                <div className="col-md-9 col-lg-9 col-xs-9">

                    <form className="border border-light p-5" encType="multipart/form-data">
                        <p className="text-center h2 mb-4">Download the file  sent from <strong>{sender}</strong> here with just one click {passwordExist && "Password exist"}.</p>
                        <Button btnName="Download your file" btnClass="btn btn-primary"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Download;