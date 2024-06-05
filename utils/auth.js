const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

exports.generateToken = (userId, isAdmin) => {
  return jwt.sign({ userId, isAdmin },"Anappleadaykeepsthedoctoraway", { expiresIn: '1h' });
};

exports.verifyToken = (token) => {
  return jwt.verify(token, "Anappleadaykeepsthedoctoraway");
};
