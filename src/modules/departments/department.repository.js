// repository → SQL ONLY 

import  pool  from "../../config/database.js"

export const getAllDepartmentQuery = async()=>{
    try {
        let sql =`SELECT * FROM departments WHERE status = 'active'`
        const [results] = await pool.execute(sql)
        return results;
        
    } catch (error) {
         console.error("DB ERROR (getAllDepartmentQuery):", error);
    throw error; 
    }
}

export const createDepartmenQuery = async(name, description)=>{
    try {
       let sql =`INSERT INTO departments (name,description) values (?,?)`
       const [results] = await pool.execute(sql, [name, description]);
       console.log("createDepartmenQuery results",results);
       
       return results.id;
    } catch (error) {
        console.error("DB ERROR (createDepartmenQuery):", error);
        throw error;
    }
}