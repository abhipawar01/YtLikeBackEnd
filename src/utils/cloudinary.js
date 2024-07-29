import {v2 as cloudinary} from "cloudinary";
import fs from "fs";

import { v2 as cloudinary } from 'cloudinary';

    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View Credentials' below to copy your API secret
    });


    const uploadOnCloudinary = async (localFilePath) => {
        try {
            if(!localFilePath) return null
            //upload file to the cloudinary
            const response  =  await cloudinary.uploader.upload(localFilePath,{
                resource_type: "auto"
            })
            //file has been uploaded successfully
            console.log("File is uploaded on cloudinary ",response.url);
            return response
        } catch (error) {
            fs.unlinkSync(localFilePath)
            //remove the locally saved temp files as the upload operations got failed 
            return null;
        }
    }
