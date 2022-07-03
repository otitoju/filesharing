
function Input(props) {
    return (
        <div className="form-group mb-3">
            <label htmlFor="formFile" className="form-label">{props.label}</label>
            <input className="form-control" type={props.type} ref={props.inputRef} onChange={props.onChange} />
        </div>
    );
}

export default Input;