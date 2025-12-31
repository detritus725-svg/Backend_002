import mongoose ,{ Schema } from "mongoose";

const internshipsSchema = new Schema(
    {
        internshipName:{
            type: String,
            required:true
        },

        company:{
            type:String,
            required:true
        },

        duration:{
            type: String,
            required:true
        },

        workdescription:{
            type:String,
            required:true
        },

        skillsRequired:{
            type:String,
            required:true
        }  
    },

    {
        timestamps:true
    }
);

export default mongoose.model("Internships",internshipsSchema);