import { useAuth } from "../contexts/LoginContext.jsx";

export const Login = () => {
  const { isLoggedIn, setisLoggedIn } = useAuth();

  const onLoginClick = () => {
    setisLoggedIn(!isLoggedIn);
  };

  return (
    <>
      <h1>Login Page</h1>
      {!isLoggedIn && (
        <label>
          {" "}
          Mobile Number :
          <input placeholder="enter your mobile No.:" maxLength={10} />
        </label>
      )}
      <button onClick={onLoginClick}>{ !isLoggedIn? 'Login' : 'Logout' }</button>
    </>
  );
};
