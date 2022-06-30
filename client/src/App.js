
import { useState, useRef } from 'react';
import './App.css';

function App() {
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
    .then( res => res.json())
    .then( res => {
      console.log(res)
    })
    .catch(err => { console.log(err)});
  }
  
  return (
    <div className="App">
      <h1>Share file with your family and friend.</h1>
      <input type="text" placeholder="Enter your name" ref={ownerInput} /> <br/>
      <input type="password" placeholder="Secure file with password" ref={passwordInput} /> <br/>
      <input type="file" onChange={ e => { setFile(e.target.files[0])} }/> <br/>
      <button onClick={handleShare} >Share</button>
    </div>
  );
}

export default App;
