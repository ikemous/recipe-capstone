module.exports = function(sequelize, DataTypes) {
    const Recipe = sequelize.define("Recipe", {
        name: {
           type: DataTypes.STRING,
           allowNull: false,
        },
    });
    return Recipe;
};