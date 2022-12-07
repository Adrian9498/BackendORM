import { Project } from '../models/Project.js'

import { Task } from '../models/Task.js'

export const getProjects = async (req,res) => {
    try{
        const response = await Project.findAll({include:Task});
        res.status(200).json(response);
    }catch(err){
        res.status(500).json({"error": err.message});
    }
}

export const createProject = async (req, res) => {
    try{
        const {name,priority,description} = req.body;

        const createProject = await Project.create({
            name,
            description,
            priority
        }); 

        res.status(200).json(createProject);
    }catch(err){
        res.status(500).json({"error": err.message});
    }
}

export const updateProject = async (req, res) => {
    try {
        const {id} = req.params;
        const {name,priority,description} = req.body;

        const project = await Project.findByPk(id);

        project.description = description
        project.priority = priority
        project.name = name

        await project.save();

        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({"error": error.message});
    }
}

export const deleteProject = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await Project.destroy({
            where: {id_project : id}
        })

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({"error": error.message});
    }
    
}