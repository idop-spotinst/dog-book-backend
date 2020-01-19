//const { Sequelize } = require('sequelize');
import Sequelize from 'sequelize';
const sequelize = new Sequelize('dog-book', 'root', 'Idospotinst23', {
  host: 'localhost',
  port: '',
  dialect: 'mysql',
  operatorsAliases: false
});

async function isAthenticated() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

isAthenticated();

export default sequelize;


//sequelize.authenticate()
//  .then(() => console.log('DB connected!'))
//  .catch((err) => console.log('DB connection Error: ', err));


//module.exports = sequelize;
