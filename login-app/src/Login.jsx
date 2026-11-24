import Input from "./Input.jsx";

function Login(props) {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      <button type="button" onClick={props.onLogin}>
        Login
      </button>
    </form>
  );
}

export default Login;