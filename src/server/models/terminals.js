const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TerminalSchema = new Schema(
    {
        bank: {
            type: Schema.Types.ObjectId,
            ref: "Bank",
        },
        latitude: Number,
        longitude: Number,
        address: String,
    },
    {
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at",
            deletecAt: "deleted_at",
        },
    },
);

module.exports = mongoose.model("Terminal", TerminalSchema);
