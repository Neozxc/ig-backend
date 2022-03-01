const igUser = require("./userModel");

exports.addUser = async (req, res) => {
    try {
        const newUser = await igUser.create(req.body);
        res.status(200).send({ user: newUser })
    } catch (error) {
        console.log(error);
        res.status(500).send({ err: error.message });
    }
};

exports.listUser = async (req, res) => {
    try {
        const newUser = await igUser.find({});
        res.status(200).send({ user: newUser })
    } catch (error) {
        console.log(error);
        res.status(500).send({ err: error.message });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const user = await igUser.deleteOne( req.body );
        res.status(200).send({ user });
    } catch (error) {
        console.log(error);
        res.status(500).send({ err: error.message });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const user = await igUser.updateOne(
            { username: req.body.username },
            { $set: { username: req.body.newUsername }}
        );
            res.status(200).send({ user });
    } catch (error) {
        console.log(error);
        res.status(500).send({ err: error.message });
    }
};