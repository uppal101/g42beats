const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
  const token = req.headers['token'];
  if(token) {
    jwt.verify(token, process.env.JWT_KEY, (err, payload) => {
          if (err) {
    				return res.status(401).json('Failed to authenticate token.');
    			} else {
    				req.body.userId = payload.userId;
    				next();
    			}
    		});
    	} else {
    		return res.status(401).json('No token provided.')
      }
}

module.exports = {
  verifyToken: verifyToken
}
