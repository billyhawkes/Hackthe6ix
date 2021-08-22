import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema({
    email: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    password: { type: String, required: true, minLength: 8 },
    bio: { type: String, required: false, maxcLength: 280, default: "" },
    birthday: { type: Date, required: true },
});

const User = mongoose.model("users", UserSchema);

export default User;
