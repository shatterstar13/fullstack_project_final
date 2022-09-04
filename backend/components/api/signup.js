const user = require("../modals/user");

const create = (req, res) => {
  const { fname, lname, uname, dob, mail, contact, role, password, confirm } =
    req.body;
  let data;
  try {
    data = new user({
      fname,
      lname,
      uname,
      dob,
      mail,
      contact,
      role,
      password,
      confirm,
    });
    data = data.save();
  } catch (err) {
    console.log(err);
  }

  if (!data) {
    return res.status(404).json({ message: "Data not saved!" });
  }
  return res.status(200).json({ data });
};
exports.create = create;
