import resumes from "../Models/resumeModel.js";


export const submitResume = async (req, res) => {

    const { firstname, lastname, address, phonenumber, email, qualifications, experiences, skills, refId } = req.body;


    try {
        const addResume = new resumes({
            firstname, lastname, address, phonenumber, email, qualifications, experiences, skills, refId
        });

        addResume.save();
        return res.status(200).json({ msg: "Resume added Successfully" });

    } catch (error) {

        console.log(error.message);
        return res.status(400).json({ msg: "Resume Building Failed" });

    }
}


export const uploadImage = async (req, res) => {
    try {
        const file = req.file.buffer;
        const formData = new FormData();
        formData.append('file', file);

        const response = await axios.post('https://upload.imagekit.io/api/v1/files/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: 'your_imagekit_io_private_key',
            },
        });

        // Retrieve the thumbnail URL from the response data
        const thumbnail = response.data.thumbnailUrl;

        console.log('Thumbnail URL:', thumbnail);

        res.status(200).json({ thumbnailUrl: thumbnail });
    } catch (error) {
        console.error('Error uploading image:', error);
        res.status(500).json({ error: 'Image upload failed' });
    }
};




export const getTheResumesByEmail = async (req, res) => {
    const { email, limit } = req.body;

    try {
        const resume = await resumes.find({ email: email }).sort({ createdAt: 'desc' }).limit(limit);
        return res.status(200).json(resume);
    }
    catch (error) {
        return res.status(400).json({ msg: error });
    }


}
export const getTheResumesByRefId = async (req, res) => {
    const { refId } = req.body;

    try {
        const resume = await resumes.findOne({ refId: refId });
        return res.status(200).json(resume);
    }
    catch (error) {
        return res.status(400).json({ msg: error });
    }


}

export const updateResume = async (req, res) => {
    const { id, updatedData } = req.body
    try {
        const result = await admins.findByIdAndUpdate(id, updatedData, { new: true });
        if (!result) {
            return res.status(400).json({ msg: "User not Found" });
        }
        console.log(result);
        return res.status(200).json({ msg: 'Uspades', result: result });

    } catch (error) {
        return res.status(400).json({ msg: 'Uspades Falotro' });

    }
}
