const mongoose = require("mongoose");

const igUserSchema = new mongoose.Schema({
    email: {
        type: String
    },

    username: {
        type: String,
    },

    password: {
        type: String
    }
});

const igUser = mongoose.model("IG-Backend", igUserSchema);

module.exports = igUser;