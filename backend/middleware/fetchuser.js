var jwt = require('jsonwebtoken');
const jwt_key = 'AbhishekTyagi'

const fetchuser = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) {
        res.status(400).send("Enter valid authenthication token");
    }
    try {
        const data = jwt.verify(token, jwt_key);
        req.user = data.user;
        next();
    } catch (error) {
        res.status(400).send("Enter valid authenthication token");
    }
}
module.exports = fetchuser