import sequelize from '../config/database.js';
import User from './user.js';

const initDb = async () => {
  await sequelize.sync({ force: false });
  console.log('Database synced');
};

export { User, initDb };
