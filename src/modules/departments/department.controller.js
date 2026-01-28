import { createDepartmenQuery, getAllDepartmentQuery } from "./department.repository.js";

export const createDepartment = async (req, res) => {
console.log("createDepartment  req " , req.body);
try {
    const { name, description } = req.body;
    
    await createDepartmenQuery(name, description);
    
   res.status(201).json({ message: "Department created", id });
    return res;
    
} catch (error) {
    console.error("API ERROR (createDepartment):", error);
    res.status(500).json({
      message: error.message || "Internal Server Error",
    });
}

}
export const getAllDepartments = async (req, res) => {

    try {
        const departments = await getAllDepartmentQuery();
        res.status(200).json({data: departments});
        return res;
    }
    catch (error) {
      console.error("API ERROR (getAllDepartments):", error);
    res.status(500).json({
      message: error.message || "Internal Server Error",
    });
    };
}

export const updateDepartment  = async (req, res) => {

}

export const deleteDepartment  = async (req, res) => {
    
}