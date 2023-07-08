import { response } from 'express';
import File from '../models/file.js';


export const uploadImage = async (req,res) => {
    console.log(req);
    const fileObj = {
        path: req.file.path,
        name: req.file.originalname
    }
    try{
        const file = await File.create(fileObj);
        res.status(201).json({path:`http://localhost:8000/file/${file._id}`});
    }catch(error){
            console.log('Error while uploading image: ',error.message);
            response.status(500).json({message: error.message});
    }
}

export const downloadImage = async (req,res) => {
    try{
        const file = await File.findById(req.params.fileId);
        file.downloadContent ++;

        await file.save();

        res.download(file.path,file.name);
    }catch(error){
        console.log('Error while downloading image: ',error.message);
        response.status(500).json({message: error.message});
    }
}