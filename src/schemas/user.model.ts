import mongoose from "mongoose"

const Schema = mongoose.Schema;

const UsersChema = new Schema({
    name: String,
    email: {
        type: String,
        lowercase: true,
        required: true,
        unique: true
    },
    password: String
});
UsersChema.methods.toJSON = function() {
    return this.toObject();
  };

export default mongoose.model("User", UsersChema);