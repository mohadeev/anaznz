import dbConnect from "../../../../backend/db/dbCinnect/index";
import Product from "../../../../backend/db/schema/product/index";
import User from "../../../../backend/db/schema/user/index";
import Cookies from "js-cookie";
import mongoose from "mongoose";

const index = async (req, res) => {
  const { method } = req;
  const categorie = req.body.categorie;
  const subcategory = req.body.subcategory;
  const name = req.body.name;
  const forsex = req.body.forsex;
  const image = req.body.image;
  const type = req.body.type;
  const price = req.body.price;
  const descount = req.body.descount;
  const descreption = req.body.descreption;
  const age = req.body.age;
  const color = req.body.color;
  const size = req.body.size;
  const brand = req.body.brand;
  const condestion = req.body.condestion;
  const condestionshepping = req.body.condestionshepping;
  const sheppingcompany = req.body.sheppingcompany;
  const location = req.body.location;
  const cookies = req.cookies.user_ref;
  if (method === "POST") {
    dbConnect();
    console.log(cookies);
    User.findOne({ _id: cookies }).then((doc) => {
      Product.create({
        name,
        categorie,
        subcategory,
        price,
        descount,
        descreption,
        image,
        age,
        type,
        forsex,
        color,
        size,
        brand,
        condestion,
        condestionshepping,
        sheppingcompany,
        location,
        ownerid: cookies,
      }).then(
        Product.findOne({ userid: doc._id }).then((doc2) => {
          console.log("Helllo");
        })
      );
    });
  } else {
    console.log(method);
    res.end();
  }
};
export default index;
