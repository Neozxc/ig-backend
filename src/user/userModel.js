const mongoose = require("mongoose");

const igUserSchema = new mongoose.Schema({
    username: {
        type: String,
    },

    email: {
        type: String
    },

    password: {
        type: String
    }
});

const igUser = mongoose.model("IG-Backend", igUserSchema);

module.exports = igUser;