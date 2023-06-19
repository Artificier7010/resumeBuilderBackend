import express  from "express";
import { getTheResumesByEmail, getTheResumesByRefId, submitResume, updateResume } from "../Controller/formController.js";
import multer from 'multer';

const upload = multer();



const router=express.Router();


// Participants API Routes

router.post("/build/resume",submitResume);
router.post("/getallresumes",getTheResumesByEmail);
router.post("/resumebyid",getTheResumesByRefId);
router.put("/put/resume",updateResume);




export default router;
