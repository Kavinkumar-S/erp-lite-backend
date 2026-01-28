import express from "express";
import departmentRoutes from "../modules/departments/department.routes.js";

const router = express.Router();

router.use("/departments", departmentRoutes);

export default router;
