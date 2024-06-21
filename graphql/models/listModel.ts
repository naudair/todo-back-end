import mongoose from "mongoose";

const listSchema = new mongoose.Schema({
  id: String,
  title: String,
  status: {
    type: String,
    enum: ["Done", "Pending"],
  },
  date: { type: Date, default: Date.now() },
  actions: String,
});
const ListModal = mongoose.models.list || mongoose.model("list", listSchema);

export default ListModal;
