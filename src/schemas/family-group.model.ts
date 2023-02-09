import mongoose from "mongoose";

const Schema = mongoose.Schema;

const FamilyGroupsSchema = new Schema({
  surname: String,
  participants: [String]
});

FamilyGroupsSchema.methods.toJSON = function() {
  return this.toObject();
};

export default mongoose.model("FamilyGroups", FamilyGroupsSchema);
