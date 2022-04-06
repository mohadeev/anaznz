import dbConnect from "../../../backend/db/dbCinnect/index";
import User from "../../../backend/db/schema/user";
dbConnect();
const Index = async (req, res) => {
  const { email } = req.body;
  const { author } = req.body;
  const { login } = req.body;

  const { method } = req;
  if (method === "POST") {
    User.create({ email, author }, () => {
      console.log("Done");
    });
    res.json(req.body);
  } else if (method === "PUT" && login === true) {
    console.log(login);
    User.findOneAndUpdate({ email: "mohamed" }, { login: login }, () => {
      if (!err) {
        console.log(err);
      } else {
        console.log("Failed to retrieve the Course List: " + err);
      }
    });
  } else if (method === "PUT" && login === false) {
    console.log(method);
    console.log(login);
    User.findOneAndUpdate({ email: "mohamed" }, { login: login }, () => {
      if (!err) {
        console.log(err);
      } else {
        console.log("Failed to retrieve the Course List: " + err);
      }
    });
  } else if (method === "GET") {
    User.find((err, docs) => {
      if (!err) {
        console.log(" no erros ");
        res.send(docs, {
          data: docs,
        });
      }
    });
  }
};

export default Index;
