
function Button(props) {
    return (
        <div className="text-center">
            <button
                id="btn"
                className={props.btnClass}
                onClick={props.onClick}
                disabled={props.disabled}
            ><i className={props.iconName} aria-hidden="true"></i> {props.btnName}</button>
        </div>
    );
}

export default Button;
