import {DataTypes} from "sequelize";
import {sequelize} from "../database/database.js";

export const Task = sequelize.define('task',{
    id_task :{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    done:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
});