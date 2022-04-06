import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Components/Login/Login";
import { Routes, Route } from "react-router-dom";
import AddUser from "./Components/User/AddUser";
import EditUser from "./Components/User/EditUser";
import ListUser from "./Components/User/ListUser";
import Header from "./Components/Header/Header";

function App() {
  // const { isLoggedIn } = useSelector((state) => state);
  let localData = localStorage.getItem("token");
  return (
    <div className="container">
      {localData ? <Header /> : ""}
      <h2>This is a crud app</h2>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/list" element={<ListUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
        <Route path="/create" element={<AddUser />} />
      </Routes>
    </div>
  );
}

export default App;
