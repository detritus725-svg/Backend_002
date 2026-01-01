const asyncHandler = (reqHandler) =>{
    return (req,res,next)=>{
        Promise.resolve(reqHandler(req,res,next)).catch((error)=>next(error))
    }
}


export {asyncHandler}


//This is a asyncHandler Function which replaces try catch block in every controller 
//It uses Promise to execute the req handler and  the error is passed to apiError using next()