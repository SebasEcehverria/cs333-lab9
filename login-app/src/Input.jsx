// Creates a reusable input field with properties passed from its parent.
function Input(props) {
    return (
      <input
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    );
  }
  
  export default Input;