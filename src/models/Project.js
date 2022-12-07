import {DataTypes} from "sequelize";
import {sequelize} from "../database/database.js";
import {Task} from './Task.js';

export const Project = sequelize.define('project',{
    id_project : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey: true
    },
    name : {
        type : DataTypes.STRING,
        allowNull: false
    },
    priority:{
        type : DataTypes.INTEGER,
        allowNull: false
    },
    description:{
        type: DataTypes.STRING,
        allowNull: false
    }
});

Project.hasMany(Task,{
    foreignKey: 'projectId',
    sourceKey : 'id_project'
});

Task.belongsTo(Project,{
    foreignKey: 'projectId',
    target : 'id_project'
});