const sequelize = require("./index");

// Define Table
const tableName = "students";
const { DataTypes } = require("sequelize");

const Student = sequelize.define(tableName, {
    id: {
        type: DataTypes.INTEGER, 
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.CURRENT_TIMESTAMP
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.CURRENT_TIMESTAMP
    }
});

module.exports = Student;