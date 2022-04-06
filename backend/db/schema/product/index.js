import mongoose from "mongoose";
// import UserSchema from "../user/index";

// const productsSchema = ();
const ProductsSchema = mongoose.Schema({
  //   link: { type: String, required: true, unique: true },
  categorie: String,
  subcategory: String,
  name: String,
  forsex: String,
  image: [],
  ownerid: String,
  type: String,
  price: Number,
  descount: Number,
  descreption: {type: Array},
  age: String,
  color: String,
  size: String,
  brand: String,
  condestion: String,
  condestionshepping: String,
  sheppingcompany: String,
  location: String,
  rating: [{ rating: Number, Reviews: Number }],
});

// export default mongoose.models.User || mongoose.model('products', UserSchema)
const Products =
  mongoose.models.products || mongoose.model("products", ProductsSchema);
export default Products;
