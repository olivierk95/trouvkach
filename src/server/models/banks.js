import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        country: String,
        color: String,
        name: String,
        icon: String,
        url: String,
        created_at: {type: Date, default: Date.now},
        updated_at: {type: Date, default: Date.now},
        deleted_at: {type: Date, default: null},
    },
    {collection: "banks"},
);

export default mongoose.model("banks", schema);
