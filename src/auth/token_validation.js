const jwt_decode = require('jwt-decode');
const jwt = require('jsonwebtoken');
const secret = "uva-exa2-hgmp-access-token";
const refreshTokenSecret = "uva-exa2-hgmp-refresh-access-token";

const checkTokenUser = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        const token = bearerToken;
        jwt.verify(token, secret, (err, decoded) => {
            if (err) {
                res.status(401).json({
                    success: 0,
                    message: "Invalid token"
                });
            } else {
                next();
            }

        });
    } else {
        res.status(401).json({
            success: 0,
            message: "Access denied unautorized user"
        });
    }
}

module.exports = { checkTokenUser, }