import axios from "axios";

const USER_BASE_URL = `http://localhost:3010/user`;

const headers = {
  "Content-Type": "application/json",
  Authorization: "Token " + localStorage.getItem("token"),
};

class UserService {
  loginUser(credentials) {
    return axios.post(USER_BASE_URL + "/login", credentials);
  }
  getUser() {
    console.log(headers);
    return axios.get(USER_BASE_URL, { headers: headers });
  }
  postUser(user) {
    console.log(headers);
    return axios.post(USER_BASE_URL, user, { headers: headers });
  }
  deleteUser(id) {
    console.log(headers);
    return axios.delete(USER_BASE_URL + "/" + id, { headers: headers });
  }
}

export default new UserService();
