import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import UserService from "../../Services/UserService";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { email, password, isLoggedIn } = useSelector((state) => state);
  useEffect(() => {
    const localData = localStorage.getItem("token");
    if (localData) {
      navigate("/list");
    }
  });

  const emailChangeHandler = (e) => {
    dispatch({ type: "email", value: e.target.value });
  };
  const passwordChangeHandler = (e) => {
    dispatch({ type: "password", value: e.target.value });
  };
  const loginHandler = (e) => {
    e.preventDefault();
    UserService.loginUser({
      email: email,
      password: password,
    }).then((res) => {
      console.log(res.data);
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        dispatch({ type: "logged", value: true });
        navigate("/list");
      } else {
        dispatch({ type: "logged", value: false });
      }
    });
  };

  return (
    <div className="container mt-3">
      {!isLoggedIn ? (
        <div className="alert alert-danger alert-dismissible">
          <strong>Error:</strong> Login creds failed
        </div>
      ) : (
        ""
      )}
      <form onSubmit={loginHandler}>
        <div className="mb-3 mt-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            placeholder="Enter email"
            onChange={emailChangeHandler}
          />
        </div>
        <div className="mb-3 mt-3">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
            placeholder="Enter password"
            onChange={passwordChangeHandler}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
