const mongoose = require('mongoose');

// Use dynamic import for `nanoid` to support ESM module
let nanoid;
(async () => {
    nanoid = (await import('nanoid')).nanoid;
})();

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide name"],
        unique: false
    },
    username: {
        type: String,
        required: [true, "Please provide username"],
        unique: [true, "Username exists"]
    },
    password: {
        type: String,
        required: [true, "Please create a password"],
        unique: false
    },
    id: {
        type: String,
        required: true,
        unique: true,
        default: () => nanoid(10)
    }
});

module.exports = mongoose.models.Users || mongoose.model("Users", userSchema);
