const mongoose = require("mongoose");
const UserSchema = require("../models/User");
const User = mongoose.model("User", UserSchema);

class UserService {
  async setUser(user) {
    if (user["_id"] !== undefined) {
      return await User.updateOne({ _id: user["_id"] }, { $set: user });
    } else {
      const userObj = User(user);
      userObj.setPassword(user.password);
      const result = await userObj.save();
      result.salt = "";
      result.hash = "";
      return result;
    }
  }

  async loginUser(email, password) {
    let result = await User.find({ email: email });
    if (result.length > 0) {
      const user = result[0];
      if (user.validatePassword(password)) {
        user.hash = "";
        user.salt = "";
        const obj = user.toObject();
        obj.token = user.generateToken();
        return obj;
      } else {
        return {};
      }
    } else {
      return {};
    }
  }

  async getUser() {
    return await User.find({ isDel: false }).select(["-salt", "-hash"]);
  }

  async getUserById(id) {
    return await User.findOne({ _id: id, isDel: false }).select([
      "-salt",
      "-hash",
    ]);
  }
  async removeUser(id) {
    return await User.updateOne({ _id: id }, { $set: { isDel: true } });
  }
}

module.exports = UserService;
