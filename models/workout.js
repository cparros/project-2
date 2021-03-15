module.exports = function (sequelize, DataTypes) {
  const workout = sequelize.define('Workout', {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });

  Example.associate = function (models) {
    Example.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Example;
};
