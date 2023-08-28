const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Products', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      validate: {
        isUUID: 4,
      },
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    category: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: ('Other, laptop, Pc, Clothes, Shoes'), 
      },
  }, {
    timestamps: false,
    freezeTableName: true,
  });

  

  
};


