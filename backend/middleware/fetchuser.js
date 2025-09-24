import jwt from "jsonwebtoken";
const JWT_secret = "karan$inghh";

const fetchuser = (req, res, next) => {
  //Get user
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ error: "Please authenticate with valid token" });
  }
  try {
    const data = jwt.verify(token, JWT_secret);
    req.user = data.user;
    next();
  } catch (e) {
    res.status(401).send({ error: "Please enter a valid token" });
  }
};

export default fetchuser;
