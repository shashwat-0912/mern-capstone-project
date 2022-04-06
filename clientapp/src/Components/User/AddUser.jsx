import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import UserService from "../../Services/UserService";

const AddUser = () => {
  const { fullname, usermail, userpassword, userphone, usergender } =
    useSelector((s) => s);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    const userData = {
      fullname,
      email: usermail,
      password: userpassword,
      phone: userphone,
      gender: usergender,
    };
    UserService.postUser(userData).then((res) => {
      console.log(res);
      if (res.status === 200) {
        navigate("/list");
      }
    });
  };
  return (
    <div className="container m-2">
      <h3>Create New user</h3>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="fullname">Fullname</label>
          <input
            type="text"
            name="fullname"
            id="fullname"
            className="form-control"
            placeholder="Enter Fullname"
            value={fullname}
            onChange={(e) => {
              dispatch({ type: "fullname", value: e.target.value });
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            className="form-control"
            placeholder="Enter email"
            value={usermail}
            onChange={(e) => {
              dispatch({ type: "usermail", value: e.target.value });
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            id="password"
            className="form-control"
            value={userpassword}
            placeholder="Enter password"
            onChange={(e) => {
              dispatch({ type: "userpassword", value: e.target.value });
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone no</label>
          <input
            type="text"
            name="phone"
            id="phone"
            className="form-control"
            value={userphone}
            placeholder="Enter phone no"
            onChange={(e) => {
              dispatch({ type: "userphone", value: e.target.value });
            }}
          />
        </div>
        <div className="form-group">
          <div className="form-check form-check-inline">
            <input
              type="radio"
              name="gender"
              id="gender"
              className="form-check-input"
              value="Male"
              checked={usergender === "Male"}
              onChange={(e) => {
                dispatch({ type: "usergender", value: e.target.value });
              }}
            />
            <label htmlFor="gender" className="form-check-label">
              Male
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              name="gender"
              id="gender"
              className="form-check-input"
              value="Female"
              checked={usergender === "Female"}
              onChange={(e) => {
                dispatch({ type: "usergender", value: e.target.value });
              }}
            />
            <label htmlFor="gender" className="form-check-label">
              Female
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              name="gender"
              id="gender"
              className="form-check-input"
              value="Others"
              checked={usergender === "Others"}
              onChange={(e) => {
                dispatch({ type: "usergender", value: e.target.value });
              }}
            />
            <label htmlFor="gender" className="form-check-label">
              Others
            </label>
          </div>
          <div className="form-group">
            <input type="submit" value="Add User" className="btn btn-primary" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
