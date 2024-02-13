const jwt = require("jsonwebtoken");

const VerifyToken = (req, res, next) => {
  let secretKey = process.env.SECRET_KEY;
  let token;
  const authHeader = req.headers.Authorization || req.headers.authorization;
  if (!authHeader) {
    res.status(400).send({ message: "Authorization not provided" });
  } else {
    if (!authHeader.startsWith("Bearer")) {
      res.status(400).send({ message: "Invalid Authorization format" });
    } else {
      token = authHeader.split(" ")[1];
      jwt.verify(token, secretKey, (err, decode) => {
        if (err) {
          res.status(400).send({ message: "Error verifying token" });
        } else {
          console.log("Received Details:", decode.user);
          req.user = decode.user;
          next();
        }
      });
    }
  }
};

module.exports = VerifyToken;
