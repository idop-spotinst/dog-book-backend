import Sequelize from 'sequelize';
import sequelize from '../database/db';

const DOG = sequelize.define(
  'dogs',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    userId: {
      type: Sequelize.STRING
    },
    unMatchedDogs: {
      type: Sequelize.STRING
    },
    createdAt: {
      type: Sequelize.DATE
    },
    updatedAt: {
      type: Sequelize.DATE
    },
    deletedAt: {
      type: Sequelize.DATE
    }
  },
  {
    timestamps: false
  }
);

export default DOG;
