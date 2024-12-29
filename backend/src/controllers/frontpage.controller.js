import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import {ApiError} from "../utils/ApiError.js"

const frontpage = asyncHandler(async (req,res)=>{
    const str = "this is front page"
    return res.status(201).json(
        new ApiResponse(200, str , "hello world successfull")
    )
})

export {frontpage}