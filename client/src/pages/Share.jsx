import { useState, useRef } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

function Share() {
    const ownerInput = useRef();
  const passwordInput = useRef();
  const [file, setFile] = useState(null);

  function handleShare(e) {
    e.preventDefault();

    const enteredOwnerInput = ownerInput.current.value;
    const enteredPasswordInput = passwordInput.current.value;
    // how to set new value to text input (ownerInput.current.value = "New value");

    const data = {
      owner: enteredOwnerInput,
      password: enteredPasswordInput,
      file: file
    };

    const formData = new FormData();
    formData.append('owner', enteredOwnerInput);
    formData.append('password', enteredPasswordInput);
    formData.append('file', file);
    console.log(formData);
    fetch("http://localhost:4000/upload", { method: "POST", body: formData })
      .then(res => res.json())
      .then(res => {
        console.log(res)
      })
      .catch(err => { console.log(err) });
  }

    return (
        <div className="container my-5" id="diva">
            <div className="row justify-content-center text-left">
                <div className="col-md-9 col-lg-9 col-xs-9">

                    <form className="border border-light p-5" encType="multipart/form-data">
                        <p className="text-center h2 mb-4">Share file with your family and friend.</p>

                        <Input label="Sender's name" type="text" inputRef={ownerInput}/>
                        <Input label="Secure your file with password (Optional)" type="password" inputRef={passwordInput}/>
                        <Input label="Upload your file here(mp3, mp4, PNG, Jpeg)" type="file" onChange={e => { setFile(e.target.files[0]) }}/>
                        <Button btnClass="btn btn-success" btnName="Share file" onClick={handleShare}/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Share;