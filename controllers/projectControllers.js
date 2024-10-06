const projectModel = require("../models/projectModels"); // Importar el modelo correctamente

async function getAllProjects(req, res) {
    try {
        const projects = await projectModel.getAllProjects(); // Esperar a que la promesa se resuelva
        if (projects.length > 0) {
            res.status(200).json(projects); // Si hay proyectos, devolver el listado
        } else {
            res.status(404).json({ message: "No projects found" }); // Si no hay proyectos, devolver mensaje
        }
    } catch (error) {
        res.status(500).json({ message: "Error retrieving projects" }); // En caso de error, devolver mensaje de error
    }
}

async function createProject(req, res) {
    try {
        const newProject = await projectModel.createProject(req.body); // Esperar a que se cree el proyecto
        res.status(201).json(newProject); // Devolver el proyecto creado
    } catch (error) {
        res.status(500).json({ message: "Error creating project" }); // En caso de error, devolver mensaje de error
    }
}

module.exports = {
    getAllProjects,
    createProject
};
