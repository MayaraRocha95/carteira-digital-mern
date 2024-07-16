import authService from "../services/authService.js";

async function signup(req, res) {
  const body = req.body;
  try{
  const resService = await authService.signup(body);
  res.status(201).send(resService);

  } catch (error) {
    res.status(409).send(error.message);
  }


}

export default {
  signup,
};
