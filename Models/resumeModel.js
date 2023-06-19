import mongoose from "mongoose";

const qualificationsSchema = new mongoose.Schema({
    institute: {
        type: String,
        required: true,
    },
    degree: {
        type: String,
        required: true,
    },
    startYear: {
        type: String,
        required: true,
    },
    endYear: {
        type: String,
        required: true,
    },
    aggregate: {
        type: String,
        default:"dd"
    },
})
const experiencesSchema = new mongoose.Schema({
    company: {
        type: String,
      
    },
    designation: {
        type: String,
        
    },
    startYear: {
        type: String,
       
    },
    endYear: {
        type: String,
       
    },
    description: {
        type: String,
    },
})



const resumesSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    phonenumber: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    qualifications: [qualificationsSchema],
    experiences: [experiencesSchema],
    skills: {
        type: [String],
    },
    refId:{
        type:String,
        required:true,
    }
},{timestamps:true});


const resumes = new mongoose.model('resumes', resumesSchema);


export default resumes;