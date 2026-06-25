const mongoose = require("mongoose");

const ReportSchema = new mongoose.Schema(
{
    recipe:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Recipe",
        required:true
    },

    reportedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },

    reason:{
        type:String,
        required:true
    },

    status:{
        type:String,
        enum:["pending","reviewed"],
        default:"pending"
    }

},
{
    timestamps:true
});

module.exports = mongoose.model("Report", ReportSchema);