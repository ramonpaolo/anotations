import Sequelize from 'sequelize';

const settings: Sequelize.Options = {
  host: 'postgresql',
  dialect: 'postgres',
  port: 5432,
  database: 'todo',
  username: 'root',
  password: 'password',
};

const sequelize = new Sequelize.Sequelize(settings)

export { sequelize };
