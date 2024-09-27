import Sequelize from 'sequelize';
import dotenv from 'dotenv';


dotenv.config();

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_DIALECT } = process.env;


const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,      // The host is 'localhost'
  port: DB_PORT,      // The port is '3306'
  dialect: DB_DIALECT // 'mysql' in this case
});


(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

export default sequelize;
