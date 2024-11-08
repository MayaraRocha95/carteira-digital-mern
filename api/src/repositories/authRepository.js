import UserShema from "../shemas/User.js";
import Jwt from "jsonwebtoken";
import 'dotenv/config';

async function create(data) {
  return await UserShema.create(data);
}

async function findByEmail(email) {
  const user = await UserShema.findOne({ email });
  return user;
}

async function generateToken(id) {
  return Jwt.sign({ id }, process.env.SECRETE, { expiresIn: "86400" });
}
async function findById(id) {
  const user = await UserShema.findById( id );
  return user;
}
export default { create, findByEmail, generateToken, findById };
