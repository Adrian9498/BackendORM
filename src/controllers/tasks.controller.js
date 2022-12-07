import { Task } from '../models/Task.js'


export const getTasks = async (req,res) => {
    try{
        const response = await Task.findAll();
        res.status(200).json(response);
    }catch(err){
        res.status(500).json({"error": err.message});
    }
}

export const createTask = async (req, res) => {
    try{
        const {name,done,projectId} = req.body;

        const createTask = await Task.create({
            name,
            done,
            projectId
        }); 

        res.status(200).json(createTask);
    }catch(err){
        res.status(500).json({"error": err.message});
    }
}

export const updateTask = async (req, res) => {
    try {
        const {id} = req.params;
        const {name,done,projectId} = req.body;

        const task = await Task.findByPk(id);

        task.done = done
        task.projectId = projectId
        task.name = name

        await task.save();

        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({"error": error.message});
    }
}

export const deleteTask = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await Task.destroy({
            where: {id_task : id}
        })

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({"error": error.message});
    }
    
}