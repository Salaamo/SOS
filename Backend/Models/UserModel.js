const mongoose = require("mongoose");
// const { isValidEmail } = require("validator");

const UserSchema = new mongoose.Schema(
    {
        FullName: { type: String, required: [true, "FullName is Required"] },
        Email: {
            type: String,
            required: [true, "Email is required"],
            unique: true, 
            message: "Email already in use", 
        },
        Password: { type: String, required: true, minlength: [6, "Password must not be less than 6 characters"] },
    },
    { timestamps: true }
);

let userModel = mongoose.model("UserModel", UserSchema);

module.exports = userModel;
