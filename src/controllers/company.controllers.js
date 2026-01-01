import companyProfileModel from "../models/company.models.js";
import {asyncHandler} from "../utils/asyncHandler.js"

export const registerCompany = asyncHandler (async(req,res)=>{
    const {name,email, password,description}= req.body;

    if(!name || !email || !password || !description){
        throw new Error("All fields are required");
    }

    const company = await companyProfileModel.create({
        name,
        email,
        password,
        description
    })
    
    return res.status(201).json({                     //can be avoided using apiResponse 
        success:true,
        message:"Company registered successfully",
        data:company
    })

})