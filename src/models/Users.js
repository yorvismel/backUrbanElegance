const { DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");

module.exports = (sequelize) => {
  sequelize.define(
    "Users",
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue: () => uuidv4(),
      },

      firstName: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },

      userName: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },

      email: {
        type: DataTypes.STRING(255),
        unique: true,
        allowNull: false,
      },

      password: {
        type: DataTypes.STRING(72),
        allowNull: false,
        set(value) {
          const hashedPassword = bcrypt.hashSync(value, 10); // Genera el hash
          this.setDataValue("password", hashedPassword);
        },
      },
     
      admin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },


    },
    {
      paranoid: true,
      timestamps: true,
    }
  );
};
