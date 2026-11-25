// Create a reusable input field using properties passed from Login.
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