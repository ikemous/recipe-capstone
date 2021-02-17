const { STRING } = require("sequelize/types");

module.exports = function(sequelize, DataTypes) {
    const Recipe = sequelize.define("Recipe", {
        userId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        label: {
           type: DataTypes.STRING,
           allowNull: false,
        },
        calories: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        image: {
            type: DataTypes.STRING,
            defaultValue: "https://via.placeholder.com/400",
        },
        totalTime: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        url: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        yield: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        ingredients: {
            type: DataTypes.STRING,
            defaultValue: ""
        }
    });
    return Recipe;
};