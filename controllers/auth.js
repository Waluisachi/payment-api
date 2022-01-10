const User = require("../models/user");

exports.login = async () => {
  const { email, password } = req.body;

  if (!email || !password) {
    console.log("Add all credentials");
  }

  try {
    const user = User.findOne({ email }).select("+password");

    if (!user) {
      console.log("User not found");
      res.status(201).json({
        success: false,
      });
    }

    res.status(201).json({
      success: true,
      user,
    });
  } catch (e) {
    next(e);
  }
};
