import express from "express";
import { createInternship, getAllInternships } from "../controllers/internships.controller.js";

const router = express.Router();

//public routes 
router.route("/signup").post(registerCompany);
router.route("/signin").post(loginCompany);






//protected routes


router.route("/internships").post(createInternship).get(getAllInternships);


export default router;
