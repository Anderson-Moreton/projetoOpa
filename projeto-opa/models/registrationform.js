'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class registrationForm extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  registrationForm.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    birthday: DataTypes.INTEGER,
    cellphone: DataTypes.INTEGER,
    password: DataTypes.STRING,
    cep: DataTypes.INTEGER,
    addressNumber: DataTypes.INTEGER,
    addressComplement: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'registrationForm',
  });
  return registrationForm;
};