import  Sequelize  from "sequelize";

//Inicio de la ORM
export const sequelize = new Sequelize(
    'projectsdb',
    'postgres',
    '1234',
    {
        host: 'localhost',
        dialect : 'postgres'
    }
);