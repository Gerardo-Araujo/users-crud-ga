const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection'); 
   // En Mayúsculas y singular      // en minúsculas y singular
const Users = sequelize.define('users', {
    // Definimos las columnas aquí
        first_name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
        last_name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
        email: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    	password: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
        birthday: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
});

module.exports = Users;