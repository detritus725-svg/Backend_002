import express from "express";
import { createInternship, getAllInternships } from "../controllers/internships.controller.js";

const router = express.Router();


router.route("/internships").post(createInternship).get(getAllInternships);


export default router;
