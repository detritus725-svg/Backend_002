import mongoose ,{Schema} from "mongoose";


const companyProfileSchema = new Schema(
    {
        name:{
            type:String,
            required:true,
            unique:true

        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true,
            unique:true
        },
        description:{
            type:String,
            required:true
        },

        internships:[
            {
                type: Schema.Types.ObjectId,
                ref:"Internships"
            }
        ],  
    },
    {
        timestamps:true
    }
)

export default mongoose.model("CompanyProfile",companyProfileSchema);
