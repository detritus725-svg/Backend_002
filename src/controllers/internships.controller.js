import Internships from "../models/internships.models.js";

export const createInternship = async (req,res) => {
    try {
        const {internshipName, company, duration, workdescription, skillsRequired} = req.body;

        const internship = await Internships.create({
            internshipName,
            company,
            duration,
            workdescription,
            skillsRequired
        });

        return res.status(201).json({
            message: "Internship created successfully",
            data: internship
        });

    } catch (error) {
        return res.status(500).json({
            message: "Error creating internship",
            error: error.message
        });
    }
}

export const getAllInternships = async (req,res) => {
    try {
        const internships = await Internships.find({});
        return res.status(200).json({
            message: "Internships fetched successfully",
            data: internships
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error fetching internships",
            error: error.message
        });
    }
}
