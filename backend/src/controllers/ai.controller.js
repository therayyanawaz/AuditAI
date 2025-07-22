const aiservice = require('../services/ai.services')

module.exports.getReview = async (req, res) => {
    const code = req.body.code;

    if (!code) {
        return res.status(400).send("please send a prompt");
    }
 
    const response = await aiservice(code);

    res.send(response);
}
